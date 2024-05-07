// sensor_manager.dart

import 'package:sensors_plus/sensors_plus.dart';

class SensorManager {
  static void init() {
    // Initialize accelerometer subscription
    accelerometerEventStream().listen((event) {
      // Your fall detection logic here
    });
  }

  static void dispose() {
    // Cancel accelerometer subscription
    // Clean up any other resources
  }
}
