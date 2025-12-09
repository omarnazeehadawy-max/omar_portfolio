import { Project, Testimonial } from './types';

// =============================================================================
//  ⚠️ VIDEO TROUBLESHOOTING GUIDE (READ THIS IF VIDEOS DON'T PLAY)
// =============================================================================

// 🔴 PROBLEM: "Video unavailable" or Error 153
//    The "License" section is HIDDEN by default. You must reveal it.

// ✅ SOLUTION 1 (YouTube Settings):
//    1. Go to YouTube Studio (studio.youtube.com).
//    2. Click 'Content' -> Click 'Pencil Icon' (Details) on your video.
//    3. Scroll to the VERY BOTTOM. Click "SHOW MORE".
//    4. Scroll down to "License".
//    5. CHECK: [x] "Allow embedding".
//    6. Click SAVE.

// ⚠️ SOLUTION 2 (Copyright Music):
//    If you did the above and it STILL doesn't work, your video likely contains
//    COPYRIGHTED MUSIC. YouTube automatically blocks embeds for videos with
//    certain music claims, even if you check "Allow embedding".
//    -> In this case, the "Watch on YouTube" button is the only way for clients to see it.

// 🔴 PROBLEM: Google Drive Video Not Loading
//    1. Go to Drive, Right-click video > Share.
//    2. Set General Access to: "Anyone with the link".
//    3. Copy Link.

// 🟢 EASY METHOD: Use Dailymotion
//    Dailymotion is free and rarely blocks embeds.
//    1. Upload to dailymotion.com.
//    2. Copy the video link (e.g., https://dai.ly/x9v7kru).
//    3. Paste it here.

// =============================================================================
//  PERSONAL INFORMATION (EDIT THIS SECTION)
// =============================================================================

export const PERSONAL_INFO = {
  // Your full name
  name: "Omar Nazeeh",
  
  // Your professional title
  role: "Video Editor",
  
  // A short bio about yourself
  introduction: `Hi, I am Omar a Video Editor specializing in both shortform and longform content.
I help creators and brands turn raw footage into engaging, high impact videos that capture attention and drive results. My focus is on creating content that not only looks great, but also performs helping your videos go viral and accelerating your growth 2x faster through strategic editing, pacing, and storytelling.

If you are looking for polished, scroll stopping videos that elevate your brand and keep your audience watching, Iam here to make it happen.`,
  
  // Your photo URL. You can paste a Google Drive link here too!
  heroImage: "https://drive.google.com/thumbnail?id=138JoQKpisK5F2vmh0qouyttPohlk31fz&sz=w1000",
  
  // Text shown in the "Available" badge
  availabilityStatus: "Available for new projects"
};

// Your WhatsApp Number for the Order page
// Format: CountryCode + Number (e.g., 15551234567)
export const WHATSAPP_NUMBER = "+20 10 28008637"; 

// =============================================================================
//  SOCIAL MEDIA LINKS (EDIT THIS SECTION)
// =============================================================================
// Leave the string empty "" if you don't want to show that icon.

export const SOCIAL_LINKS = {
  youtube: "https://www.youtube.com/@omarnazeeh8070",
  instagram: "https://www.instagram.com/omar_editing1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  facebook: "https://www.facebook.com/profile.php?id=61583318349816",
  tiktok: "https://www.tiktok.com/@omar_editing1",
  linkedin: "https://www.linkedin.com/in/omar-nazeeh-176b95379/",
  email: "omarnazeeh2020@gmail.com", // Just your email address (no 'mailto:')
};


// =============================================================================
//  PORTFOLIO PROJECTS (EDIT THIS SECTION)
// =============================================================================

// INSTRUCTIONS:
// 1. You can paste ANY Google Drive link, YouTube link (Standard, Shorts, Live), Dailymotion link, or Image link in the 'src' field.
// 2. The website will AUTOMATICALLY detect if it's a video and create a player for it.
// 3. 'type' can remain 'image' or 'video', the site is smart enough to figure it out based on the link.

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Long form video YouTube",
    category: "Video Editing",
    type: "video", 
    // Example: Google Drive Link
    src: "https://dai.ly/x9v7leu", 
  },
  {
    id: 2,
    title: "Short form Edit from podcast",
    category: "Video Editing",
    type: "video",
    // Example: Dailymotion Link (Works great for embedding!)
    src: "https://dai.ly/x9v7kru",
  },
  {
    id: 3,
    title: "short video with collage style",
    category: "video editing",
    type: "video",
    // You can paste a Google Drive video link here to replace this placeholder!
    src: "https://dai.ly/x9v7kyo",
  },
  {
    id: 4,
    title: "Promotional video for a filters brand",
    category: "Video Editing",
    type: "video",
    // Example: Another Google Drive Link
    src: "https://dai.ly/x9v7lbs",
  },
  {
    id: 5,
    title: "Promotional video for mattress brand",
    category: "Video Editing",
    type: "video",
    // Example: Another Google Drive Link
    src: "https://dai.ly/x9v7l7k",
  },
  {
    id: 6,
    title: "Gaming video in a funny style",
    category: "video Editing",
    type: "video",
    src: "https://dai.ly/x9v7ny2",
  },
];


// =============================================================================
//  CLIENT TESTIMONIALS (EDIT THIS SECTION)
// =============================================================================

// You can use direct image links or Google Drive links for the 'avatar' field.

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mr Tabla",
    role: "Content creator",
    company: "Mr Tabla el Tank",
    content: "تسلم يا محترم الفيديوهات رايقة",
    avatar: "https://yt3.googleusercontent.com/nK7eEczrMHqDSBfV9D2mfXBD0YOdx97ewn8hpxy0tiW94M6I31H_b7hLLrLWwbdrz8GS1ZmV-Q=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 2,
    name: "Mohamed El sayed",
    role: "Business owner",
    company: "قطرة عسل",
    content: "جميل ما شاء الله ربنا يبارك  جزاك الله خيراً",
    avatar: "https://youtube.com/shorts/Ts9h_yR0jTQ?feature=share"
  },
  {
    id: 3,
    name: "Ashwaq",
    role: "Student",
    company: "Graduation project.",
    content: "جزاك الله خيرا و كتب أجرك الفيديو رهيب",
    avatar: "https://picsum.photos/100/100?random=12"
  },
  {
    id: 4,
    name: "Mostafa",
    role: "Founder",
    company: "Puzzle Group",
    content: "عالمي يا برنس تسلم ايدك",
    avatar: "https://drive.google.com/file/d/1vUqHxHULvILjWtpthDYjdj5v5IqOfBoS/view?usp=sharing"
  },
];