import pickle

import pickle

# Use a raw string for the file path or replace \ with /
model_path = r'lifesyncAI\saved_models\diabetes_model.sav'
# model_path = 'lifesyncAI/saved_models/diabetes_model.sav'  # Alternatively, use this

# Load the model safely
try:
    with open(model_path, 'rb') as file:
        model = pickle.load(file)
    print("Model loaded successfully.")
except FileNotFoundError:
    print("The specified file was not found.")
except Exception as e:
    print("An error occurred while loading the model:", str(e))


    model = pickle.load(file)

import numpy as np

# Example new observation
new_data = {
    'Pregnancies': 2,
    'Glucose': 150,
    'BloodPressure': 70,
    'SkinThickness': 27,
    'Insulin': 0,
    'BMI': 30.1,
    'DiabetesPedigreeFunction': 0.9,
    'Age': 29
}

# Convert the dictionary to an array (ensure the order matches the model's training data)
feature_values = [
    new_data['Pregnancies'],
    new_data['Glucose'],
    new_data['BloodPressure'],
    new_data['SkinThickness'],
    new_data['Insulin'],
    new_data['BMI'],
    new_data['DiabetesPedigreeFunction'],
    new_data['Age']
]

# Convert to NumPy array and reshape for a single prediction
features = np.array(feature_values).reshape(1, -1)

# Make prediction
prediction = model.predict(features)

# Print the predicted outcome
print("Predicted Outcome:", "Diabetic" if prediction[0] == 1 else "Not Diabetic")

