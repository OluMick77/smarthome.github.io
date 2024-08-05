$(document).ready(function() {
  // Show login section initially
  $('#loginSection').show();

  // Handle login form submission
  $('#loginForm').on('submit', function(e) {
    e.preventDefault();
    const username = $('#username').val();
    const password = $('#password').val();

    // Dummy login logic for demonstration
    if (username === 'guest' && password === 'guest123') {
      showDashboard('guest');
    } else if (username === 'user' && password === 'user123') {
      showDashboard('user');
    } else if (username === 'admin' && password === 'admin123') {
      showDashboard('admin');
    } else {
      alert('Invalid credentials!');
    }
  });

  function showDashboard(role) {
    $('#loginSection').hide();
    $('#dashboardSection').show();

    if (role === 'guest') {
      $('#guestNetwork').show();
      $('#iotNetwork').hide();
      $('#personalNetwork').hide();
    } else if (role === 'user') {
      $('#guestNetwork').show();
      $('#iotNetwork').show();
      $('#personalNetwork').hide();
    } else if (role === 'admin') {
      $('#guestNetwork').show();
      $('#iotNetwork').show();
      $('#personalNetwork').show();
    }
  }

  // Handle View Devices button click
  $('#viewDevicesBtn').on('click', function() {
    $('.connect-btn').show();
  });

  // Handle connect button click
  $(document).on('click', '.connect-btn', function() {
    const device = $(this).data('device');
    $('#passwordPrompt').data('device', device).show(); // Show the password prompt
  });

  // Handle password prompt submission
  $('#passwordPromptForm').on('submit', function(e) {
    e.preventDefault();
    const device = $('#passwordPrompt').data('device');
    const password = $('#devicePassword').val();

    // Dummy password validation for demonstration
    if ((device === 'Laptop' && password === '30732945') || (device !== 'Laptop' && password === 'devicePassword123')) { // Replace with actual password logic
      $('#passwordPrompt').hide();
      alert(`You are now connected to ${device}.`);
    } else {
      alert('Invalid password!');
    }
  });

  // Handle Guest Devices Modal
  $('#viewGuestDevicesBtn').click(function() {
    $('#guestDevicesModal').modal('show');
  });

  $('#guestDevicesModal').on('shown.bs.modal', function () {
    $('#modalConnectSmartSpeaker').click(function() {
      $('#connectSmartSpeaker').show();
      $('#guestDevicesModal').modal('hide');
    });

    $('#modalConnectGuestWifi').click(function() {
      $('#connectGuestWifi').show();
      $('#guestDevicesModal').modal('hide');
    });
  });

  // Handle IoT Devices Modal
  $('#viewIotDevicesBtn').click(function() {
    $('#iotDevicesModal').modal('show');
  });

  $('#iotDevicesModal').on('shown.bs.modal', function () {
    $('#modalConnectSmartCamera').click(function() {
      $('#connectSmartCamera').show();
      $('#iotDevicesModal').modal('hide');
    });

    $('#modalConnectThermostat').click(function() {
      $('#connectThermostat').show();
      $('#iotDevicesModal').modal('hide');
    });
  });

  // Handle Personal Devices Modal
  $('#viewPersonalDevicesBtn').click(function() {
    $('#personalDevicesModal').modal('show');
  });

  $('#personalDevicesModal').on('shown.bs.modal', function () {
    $('#modalConnectLaptop').click(function() {
      $('#connectLaptop').show();
      $('#personalDevicesModal').modal('hide');
    });

    $('#modalControlManageDevices').click(function() {
      window.location.href = 'otherdevice.html';
    });
  });
});
