import 'package:permission_handler/permission_handler.dart';

void requestPermissions() async {
  // Request location and sensor permissions
  Map<Permission, PermissionStatus> statuses = await [
    Permission.location,
    Permission.sensors,
  ].request();

  // Check the permission status
  if (statuses[Permission.location]?.isDenied ?? true) {
    print('Location permission was denied');
    // Handle the denial as appropriate in your app
  }
  if (statuses[Permission.sensors]?.isDenied ?? true) {
    print('Sensors permission was denied');
    // Handle the denial as appropriate in your app
  }
}
