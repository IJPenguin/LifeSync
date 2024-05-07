import 'dart:async';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:sensors_plus/sensors_plus.dart';
import 'fall_alert_dialog.dart'; // Assuming this is properly set up for your use case
import 'package:http/http.dart' as http;

class FallDetectionApp extends StatefulWidget {
  const FallDetectionApp({super.key});

  @override
  _FallDetectionAppState createState() => _FallDetectionAppState();
}

class _FallDetectionAppState extends State<FallDetectionApp> {
  late StreamSubscription<AccelerometerEvent> _accelerometerSubscription;
  double fallThreshold = 15.0; // Adjust this threshold as needed
  Timer? _fallAlertTimer;

  @override
  void initState() {
    super.initState();
    _startAccelerometer();
  }

  void _startAccelerometer() {
    _accelerometerSubscription = accelerometerEventStream().listen((event) {
      double totalAcceleration = event.x.abs() + event.y.abs() + event.z.abs();

      if (totalAcceleration > fallThreshold) {
        // Fall detected! Show an alert.
        showFallAlert(context, _sendLocationToServer, _fallAlertTimer);
      }
    });
  }

  void _sendLocationToServer() async {
    try {
      Position position = await Geolocator.getCurrentPosition();
      Uri url = Uri.parse('http://192.168.1.2:6969/location');

      var body = {
        'latitude': position.latitude.toString(),
        'longitude': position.longitude.toString(),
      };

      http.Response response = await http.post(url,
          headers: {'Content-Type': 'application/json'},
          body: json.encode(body));

      if (response.statusCode == 200) {
        print('Location sent successfully: ${response.body}');
      } else {
        print('Failed to send location: ${response.statusCode}');
      }
    } catch (e) {
      print('Failed to send location: $e');
    }
  }

  @override
  void dispose() {
    _accelerometerSubscription.cancel();
    _fallAlertTimer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('LifeSync')),
      body: const Center(child: Text('Monitoring for falls...')),
    );
  }
}
