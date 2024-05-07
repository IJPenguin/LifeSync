import 'package:flutter/material.dart';
import 'fall_detection_app.dart'; // Import the new file

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(primarySwatch: Colors.green),
      debugShowCheckedModeBanner: false,
      home: const FallDetectionApp(), // Use FallDetectionApp as the home of your app
    );
  }
}
