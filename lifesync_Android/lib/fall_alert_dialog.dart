import 'dart:async';
import 'package:flutter/material.dart';

void showFallAlert(BuildContext context, Function sendLocationToServer, Timer? fallAlertTimer) {
  int countdown = 10;
  bool dialogVisible = true;  // Flag to track if the dialog should be visible

  // Cancel the previous timer if it's still running
  fallAlertTimer?.cancel();

  showDialog(
    context: context,
    barrierDismissible: false,  // Prevent closing the dialog by tapping outside it
    builder: (BuildContext dialogContext) {  // Use a local context
      return StatefulBuilder(
        builder: (BuildContext context, StateSetter setState) {
          // Start a 10-second timer
          fallAlertTimer = Timer.periodic(const Duration(seconds: 1), (timer) {
            if (countdown > 0) {
              setState(() {
                countdown--;
              });
            } else {
              timer.cancel();
              if (dialogVisible) {  // Check if the dialog is still meant to be visible
                sendLocationToServer();
                Navigator.pop(dialogContext);  // Use the local context to pop the dialog
                dialogVisible = false;
              }
            }
          });

          return AlertDialog(
            title: const Text('Fall Detected'),
            content: Text('Are you okay? You have $countdown seconds to respond.'),
            actions: [
              TextButton(
                onPressed: () {
                  fallAlertTimer?.cancel(); // User canceled the alert
                  dialogVisible = false;
                  Navigator.pop(dialogContext);  // Use the local context to pop the dialog
                },
                child: const Text('Cancel'),
              ),
              TextButton(
                onPressed: () {
                  sendLocationToServer();
                  dialogVisible = false;
                  Navigator.pop(dialogContext);  // Use the local context to pop the dialog
                },
                child: const Text('Send Help'),
              ),
            ],
          );
        },
      );
    },
  ).then((_) => dialogVisible = false);  // Ensure the flag is reset when the dialog is dismissed for any reason
}
