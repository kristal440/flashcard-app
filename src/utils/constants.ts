export const DEFAULT_TAGS = [
    { name: 'Math', emoji: '🔢', isDefault: true },
    { name: 'Science', emoji: '🔬', isDefault: true },
    { name: 'History', emoji: '📜', isDefault: true },
    { name: 'Language', emoji: '🗣️', isDefault: true },
    { name: 'Geography', emoji: '🌍', isDefault: true },
    { name: 'Programming', emoji: '💻', isDefault: true },
];

export const CARD_SWIPE_THRESHOLD = 120;
export const CARD_ANIMATION_DURATION = 300;
```

---

## 🔥 **Setting Up Firebase (Next Step)**

### **1. Go to [Firebase Console](https://console.firebase.google.com/)**

1. Create a new project (name it something like "flashcard-app")
2. Click on "Web" icon (</>)
3. Register your app
4. Copy the `firebaseConfig` object

### **2. Enable Authentication:**
- Go to Authentication → Get Started
- Enable "Email/Password" provider

### **3. Create Firestore Database:**
- Go to Firestore Database → Create Database
- Start in **test mode** (for development)
- Choose a location close to you

### **4. Add Firebase Config to your app:**

Replace the placeholder values in `src/services/firebase.ts` with your actual Firebase config.

**For security**, you should use environment variables:

Create a `.env` file in your root:
```
EXPO_PUBLIC_FIREBASE_API_KEY=your_api_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id