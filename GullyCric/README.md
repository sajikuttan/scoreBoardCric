# GullyCric

GullyCric is a cricket scoring application designed for local matches, providing an intuitive interface for managing matches, players, and scores. Built with Expo and TypeScript, this app leverages Firebase Firestore for backend data storage and synchronization.

## Features

- **User Authentication** (Optional): Users can log in to manage their matches and players.
- **Player Management**: Add players manually or select from Firestore, with the ability to categorize players by type (e.g., allrounder).
- **Match Management**: Create and manage matches, including team generation, toss, and live scoring.
- **Live Scoring**: Input ball-by-ball data with options to undo actions and track innings.
- **Match Summary**: View detailed summaries of matches, including player statistics and scores.

## Folder Structure

```
GullyCric
├── App.tsx
├── app.json
├── babel.config.js
├── package.json
├── tsconfig.json
├── README.md
├── assets
│   └── (images, icons, etc.)
├── components
│   └── (reusable UI components)
├── firebase
│   └── firebaseConfig.ts
├── navigation
│   ├── AppNavigator.tsx
│   └── index.ts
├── screens
│   ├── HomeScreen.tsx
│   ├── TeamGenerationScreen.tsx
│   ├── TossScreen.tsx
│   ├── MatchScreen.tsx
│   ├── EndInningsScreen.tsx
│   └── MatchSummaryScreen.tsx
├── utils
│   ├── firestoreSchema.ts
│   ├── matchLogic.ts
│   └── helpers.ts
└── tailwind.config.js
```

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/GullyCric.git
   cd GullyCric
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Firebase**:
   - Create a Firebase project and set up Firestore.
   - Update the `firebase/firebaseConfig.ts` file with your Firebase configuration.

4. **Run the Application**:
   ```bash
   npm start
   ```

5. **Open in Expo Go**:
   - Scan the QR code with the Expo Go app on your mobile device to view the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.