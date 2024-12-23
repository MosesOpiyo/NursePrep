// This array is Mimicking Data which is usually captured through an API

import { title } from "process"

export const navLinks = [
    {
        id: 0,
        link: '/',
        linkName: 'Home'
    },

    {
        id: 1,
        link: '/about',
        linkName: 'About'
    },

    {
        id: 2,
        link: '/teas',
        linkName: 'ATI TEAS 7'
    },

    {
        id: 3,
        link: '/hesi',
        linkName: 'HESI A2'
    },

    {
        id: 4,
        link: '/nursing_school',
        linkName: 'Nursing School'
    },

    {
        id: 5,
        link: '/nurseevent',
        linkName: 'Events'
    }
]

export const dataArray =  [
    {
        id: 1,
        title: "Comprehensive Course Packages",
        description: "Detailed courses covering all sections of the nursing entrance exams. Interactive lessons with videos, quizzes, and assignments.",
        coverImg: "/anatomy.jpg",
        buttonText: 'Get started'
    },

    {
        id: 2,
        title: "Practice Tests and Question Banks",
        description: "Full-length practice tests that mimic the actual exam format and timing. Detailed score reports with performance analysis.Extensive collection of practice questions covering all exam topics. Instant feedback and explanations for each question.",
        coverImg: "/learner.jpg",
        buttonText: 'Get started'
    },

    {
        id: 3,
        title: "Personalized Study Plans",
        description: "Tailored study plans based on the student’s timeline and availability. Adaptive schedules that adjust based on progress and performance.",
        coverImg: "/han.jpg",
        buttonText: 'Get started'
    },

    {
        id: 4,
        title: "Live and Recorded Classes",
        description: "Interactive live sessions with experienced instructors. Opportunity to ask questions and participate in real-time discussions. Access to a library of recorded classes for flexible learning. Ability to review and revisit complex topics at any time.",
        coverImg: "/live.jpg",
        buttonText: 'Get started'
    },

    // {
    //     id: 5,
    //     title: "One-on-One Tutoring",
    //     description: "Personalized tutoring with expert instructors. Focus on individual strengths and weaknesses to maximize improvement.",
    //     coverImg: "/oneonone.jpg",
    //     buttonText: 'Get started'
    // },

    {
        id: 6,
        title: "Study Guides and E-Books",
        description: "Detailed study guides covering each exam section. Downloadable e-books with tips, strategies, and practice exercises.",
        coverImg: "/guides.jpg",
        buttonText: 'Get started'
    },

    {
        id: 7,
        title: "Performance Tracking and Analytics",
        description: "Detailed tracking of student progress and performance. Visual dashboards showing strengths, weaknesses, and improvement areas. Tools to analyze test results and identify patterns. Personalized recommendations based on performance data",
        coverImg: "/performance.jpg",
        buttonText: 'Get started'
    },

    // {
    //     id: 8,
    //     title: "Community Support",
    //     description: "Online community for students to ask questions, share experiences, and support each other. Moderated by instructors and alumni for accurate information and guidance.",
    //     coverImg: "/community.jpg",
    //     buttonText: 'Get started'
    // },

    // {
    //     id: 9,
    //     title: "Exam Day Preparation",
    //     description: "Tips and strategies for managing time, handling stress, and maximizing performance on exam day. Mock exams under timed conditions to simulate the real exam experience. Comprehensive checklists to ensure students are fully prepared for exam day.",
    //     coverImg: "/examday.jpg",
    //     buttonText: 'Get started',
    // },
    
]

export const worksArray =  [
    {
        id: 1,
        title: 'Sign-up',
        description: "Create your account and choose the study plan that fits your needs.",
        coverImg: "/signup.svg",
        class: 'works-card flex gap-8 p-4 relative items-start signup'
    },

    {
        id: 2,
        title: 'Access Comprehensive Resources',
        description: "Explore our extensive library of study guides, practice tests, and e-books.",
        coverImg: "/resources.svg",
        class: 'works-card flex gap-8 p-4 relative items-start resources'
    },

    {
        id: 3,
        title: 'Practice and Assess',
        description: "Take practice tests and quizzes to assess your knowledge and track your progress.",
        coverImg: "/practice.svg",
        class: 'works-card flex gap-8 p-4 relative items-start practice'
    },

    {
        id: 4,
        title: 'Achieve Success',
        description: "Confidently pass your nursing entrance exams and take the first step toward your nursing career.",
        coverImg: "/success.svg",
        class: 'works-card flex gap-8 p-4 relative items-start success'
    }
]

export const testimonialArray =  [
    {
        id: 1,
        name: 'John Doe',
        title: 'Student',
        testimony: "Create your account and choose the study plan that fits your needs.",
        image: "/hero.jpg",
        class: 'testimonial-card relative john'
    },

    {
        id: 2,
        name: 'Anne Marie',
        title: 'Student',
        testimony: "Explore our extensive library of study guides, practice tests, and e-books.",
        image: "/hero.jpg",
        class: 'testimonial-card relative anne'
    },

    {
        id: 3,
        name: 'Jordan K',
        title: 'Student',
        testimony: "Confidently pass your nursing entrance exams and take the first step toward your nursing career.",
        image: "/hero.jpg",
        class: 'testimonial-card relative jordan'
    },

    {
        id: 4,
        name: 'Anna Mitro',
        title: 'Student',
        testimony: "Take practice tests and quizzes to assess your knowledge and track your progress.",
        image: "/hero.jpg",
        class: 'testimonial-card relative anna'
    }

    // {
    //     id: 5,
    //     name: 'Njenga N.',
    //     title: 'Student',
    //     testimony: "Take practice tests and quizzes to assess your knowledge and track your progress.",
    //     image: "/hero.jpg",
    //     class: 'testimonial-card relative njenga'
    // },

    // {
    //     id: 6,
    //     name: 'Eunice M.',
    //     title: 'Student',
    //     testimony: "Take practice tests and quizzes to assess your knowledge and track your progress.",
    //     image: "/hero.jpg",
    //     class: 'testimonial-card relative eunice'
    // },

    // {
    //     id: 7,
    //     name: 'Eric K.',
    //     title: 'Student',
    //     testimony: "Take practice tests and quizzes to assess your knowledge and track your progress.",
    //     image: "/hero.jpg",
    //     class: 'testimonial-card relative eric'
    // },
    // {
    //     id: 8,
    //     name: 'Mary A.',
    //     title: 'Student',
    //     testimony: "Take practice tests and quizzes to assess your knowledge and track your progress.",
    //     image: "/hero.jpg",
    //     class: 'testimonial-card relative mary'
    // }
]

export const pricingArray =  [
    {
        id: 0,
        access: 'Monthly',
        pricing: '29',
        period: 'month',
        btn_period: 'Monthly',
        ideal: 'Ideal for students testing within two months',
        className: 'pricing-card p-8 flex flex-col gap-8 month relative',
        signupbtn_text: 'monthly'
    },

    {
        id: 1,
        access: 'Quarterly',
        pricing: '75',
        period: '3 months',
        btn_period: '3-Month',
        ideal: 'Ideal for students testing in three months or later',
        className: 'pricing-card p-8 flex flex-col gap-8 quarter relative',
        save: 'Save $12',
        signupbtn_text: 'three_month'
    }
]

export const pricingFeatures = [
    
        {
            id: 1,
            feature: 'Immediate access to all 7,500+ exam-like practice questions',
        },

        {
            id: 2,
            feature: 'Step-by-step answer explanations for every question',
        },

        {
            id: 3,
            feature: 'Detailed score reports',
        },

        {
            id: 4,
            feature: 'Convenient customer service chat',
        },

        {
            id: 5,
            feature: 'Track your progress and test history',
        },

        {
            id: 6,
            feature: 'Pass guarantee',
        },
   
]

export const comparisonData = [
    {
        id: 0,
        topic: '',
        traditional: 'TRADITIONAL STUDY GUIDES',
        nurseprep: 'NursePrep',
        textclassName: 'textheaders',
        topclassName: 'top-div'
    },

    {
        id: 1,
        topic: 'COST',
        traditional: 'Upfront cost for each book or guide, which can add up. Additional costs for supplementary materials or new editions. No opportunity to try before buying.',
        nurseprep: '$29.99 / month'
    },

    {
        id: 2,
        topic: 'Accessibility',
        traditional: 'Physical books or printed materials that need to be carried around. Study limited to where the materials are available. No flexibility in access time unless carrying the materials everywhere.',
        nurseprep: 'Accessible from anywhere with an internet connection. Available 24/7, allowing flexible study times. Compatible with various devices (desktop, laptop, tablet, smartphone).'
    },

    {
        id: 3,
        topic: 'Interactivity',
        traditional: 'Static content with no interactive elements. Limited to text and static images. No real-time feedback or interactive discussion opportunities.',
        nurseprep: 'Interactive quizzes and practice tests with instant feedback. Multimedia resources such as videos, animations, and interactive diagrams. Discussion forums and support from educators and peers.'
    },

    {
        id: 4,
        topic: 'Customization and Adaptability',
        traditional: 'One-size-fits-all approach with no personalization. Fixed content that doesnt adapt to individual progress. Updates require purchasing new editions.',
        nurseprep: 'Personalized study plans based on strengths and weaknesses. Adaptive learning technology that adjusts difficulty based on performance. Regular updates with the latest exam information and practice questions.'
    },

    {
        id: 5,
        topic: 'Engagement and Motivation',
        traditional: 'Limited to self-motivation and discipline to follow through. Static content can become monotonous. No built-in tracking or goal-setting features.',
        nurseprep: 'Gamified elements like badges, leaderboards, and progress tracking. Regular updates and new content keep learning fresh and engaging. Ability to track progress and set goals boosts motivation.'
    },

    {
        id: 6,
        topic: 'Support and Resources',
        traditional: 'Limited to the information provided within the guide. No direct access to educators or support communities. Rely on self-study and external resources for additional help.',
        nurseprep: 'Access to online tutors, webinars, and live Q&A sessions. Community support through forums and social media groups. Comprehensive FAQ sections and customer support.',
        textclassName: 'bottom-div',
    },
]

export const faqData = [
    {
        id: 1,
        question: 'What study materials are included in the subscription plans?',
        answer: 'Our subscription plans include comprehensive study guides, practice tests, question banks, and access to live and recorded classes. The plans also offer one-on-one tutoring and career guidance.',
        value: 'item-1'
    },

    {
        id: 2,
        question: 'Can I upgrade my plan at any time?',
        answer: 'Yes, you can upgrade your plan at any time. Simply log into your account, select the plan you wish to upgrade to, and follow the prompts.',
        value: 'item-2'
    },

    {
        id: 3,
        question: 'Is there a money-back guarantee?',
        answer: 'Yes, we offer a 30-day money-back guarantee. If you`re not satisfied with our services, you can request a full refund within 30 days of your purchase.',
        value: 'item-3'
    },

    {
        id: 4,
        question: 'How do the personalized study plans work?',
        answer: 'Personalized study plans are tailored to your specific needs and goals. After an initial assessment, we create a customized plan to help you focus on the areas where you need the most improvement.',
        value: 'item-4'
    },

    {
        id: 5,
        question: 'Are the live classes recorded?',
        answer: 'Yes, all live classes are recorded and available for playback. This allows you to review the material at your own pace and convenience.',
        value: 'item-5'
    },

    {
        id: 6,
        question: 'What is included in the career guidance and resume review service?',
        answer: 'Our career guidance service includes personalized advice on job search strategies, interview preparation, and resume review to help you stand out to potential employers.',
        value: 'item-6'
    },

    {
        id: 7,
        question: 'How can I contact customer support?',
        answer: 'You can contact our customer support team via email, live chat, or phone. Our support team is available 24/7 to assist you with any questions or issues you may have.',
        value: 'item-7'
    },
]

export const teamData = [
    {
        id: 1,
        image: '/founder.jpg',
        name: 'John Doe',
        title: 'Founder'
    },

    {
        id: 2,
        image: '/co-founder.jpg',
        name: 'Jane Doe',
        title: 'Co-Founder'
    },

    {
        id: 3,
        image: '/CEO.jpg',
        name: 'James Doe',
        title: 'CEO'
    }
]


export const teasData = [
    {
        id: 0,
        name: 'Math',
        imageUrl: '/math.jpg'
    },

    {
        id: 1,
        name: 'English',
        imageUrl: '/english.jpg'
    },

    {
        id: 2,
        name: 'Science',
        imageUrl: '/science.jpg'
    },

    {
        id: 3,
        name: 'Reading',
        imageUrl: '/reading.jpg'
    },
]

export const hesiData = [
    {
        id: 0,
        name: 'Math',
        imageUrl: '/math.jpg'
    },

    {
        id: 1,
        name: 'English',
        imageUrl: '/english.jpg'
    },

    {
        id: 2,
        name: 'Science',
        imageUrl: '/science.jpg'
    },

    {
        id: 3,
        name: 'Reading',
        imageUrl: '/reading.jpg'
    },
]

export const testsArray =  [
    {
        id: 0,
        lessonTitle: "Math",
        topics: [
            {
                id: 0,
                title: 'Introduction',
                subtitle: 'introduction to Maths test',
                content: 'Maths test is a universally loved subject'
            },

            {
                id: 1,
                title: 'Algebra',
                subtitle: 'introduction to Algebra test',
                content: 'Algebra test is not a boring subject'
            }
        ],
    },

    {
        id: 1,
        lessonTitle: "English",
        topics: [
            {
                id: 0,
                title: 'Introduction',
                subtitle: 'introduction to English test',
                content: 'English test is a universally loved subject'
            },

            {
                id: 1,
                title: 'Language Comprehension',
                subtitle: 'introduction to Language comprehension test',
                content: 'Language comprehension test is not a boring subject'
            }
        ],
    },

    {
        id: 2,
        lessonTitle: "Science",
        topics: [
            {
                id: 0,
                title: 'Introduction',
                subtitle: 'introduction to Science test',
                content: 'Science is a universally loved subject'
            },

            {
                id: 1,
                title: 'Chemical comprehension',
                subtitle: 'introduction to Chemical comprehension test',
                content: 'Chemical comprehension test is not a boring subject'
            }
        ],
    },

    {
        id: 3,
        lessonTitle: "Reading",
        topics: [
            {
                id: 0,
                title: 'Introduction',
                subtitle: 'introduction to Reading test',
                content: 'Reading test is a universally loved subject'
            },

            {
                id: 1,
                title: 'Reading comprehension test',
                subtitle: 'introduction to Reading comprehension test',
                content: 'Reading comprehension test is not a boring subject'
            }
        ],
    },    
]

export const topicsArray =  [
    {
        id: 0,
        subject: 'Math',
        content: [
            {
                id: 0,
                topic: 'Introduction',
                subtopic: 'introduction to Maths',
                content: 'Maths is a universally loved subject'
            },

            {
                id: 1,
                topic: 'Algebra',
                subtopic: 'introduction to Algebra',
                content: 'Algebra is a universally loved subject'
            }
        ],
        
    },

    {
        id: 1,
        subject: 'English',
        content: [
            {
                id: 0,
                topic: 'Introduction',
                subtopic: 'introduction to English',
                content: 'English is a universally loved subject'
            },

            {
                id: 1,
                topic: 'Language comprehension',
                subtopic: 'introduction to Language comprehension',
                content: 'Language comprehension is a universally loved subject'
            }
        ],
        
    },

    {
        id: 2,
        subject: 'Science',
        content: [
            {
                id: 0,
                topic: 'Introduction',
                subtopic: 'introduction to Science',
                content: 'Science is a universally loved subject'
            },

            {
                id: 1,
                topic: 'Chemical comprehension',
                subtopic: 'introduction to Chemical comprehension',
                content: 'Chemical comprehension is a universally loved subject'
            }
        ],
    },

    {
        id: 3,
        subject: 'Reading',
        content: [
            {
                id: 0,
                topic: 'Introduction',
                subtopic: 'introduction to Reading',
                content: 'Reading is a universally loved subject'
            },

            {
                id: 1,
                topic: 'Reading comprehension',
                subtopic: 'introduction to Reading comprehension',
                content: 'Reading comprehension is a universally loved subject'
            }
        ],
        
    },
        
   
]

export const nursingCourses = [
    {
        id: 0,
        title: 'Nursing Life',
        course: [
            {
                id: 0,
                imageUrl: '/professional.jpg',
                largeimageUrl: '/professional-large.jpg',
                courseTitle: 'Professionalism',
                courseInfo: 'Learn about or review the professional expectations you will be held to as a professional nurse'
            },

            {
                id: 1,
                imageUrl: '/selfcare.jpg',
                largeimageUrl: '/selfcare-large.jpg',
                courseTitle: 'Self-Care',
                courseInfo: 'Learn about the importance of self-care and how to develop your own self-care plan'
            }
        ]
    },

    {
        id: 1,
        title: 'Classroom',
        course: [
            {
                id: 0,
                imageUrl: '/time.jpg',
                largeimageUrl: '/time-large.jpg',
                courseTitle: 'Time Management',
                courseInfo: 'Learn how to effectively manage your time while in Nursing School'
            },

            {
                id: 1,
                imageUrl: '/apa.jpg',
                largeimageUrl: '/apa-large.jpg',
                courseTitle: 'APA Formatting',
                courseInfo: 'Learn how to use APA formatting in your writing while in Nursing School'
            },

            {
                id: 2,
                imageUrl: '/thinking.jpg',
                largeimageUrl: '/thinking-large.jpg',
                courseTitle: 'Introduction to Critical Thinking and Clinical Reasoning',
                courseInfo: 'Learn how to use APA formatting in your writing while in Nursing School',
            }
        ]
    },

    {
        id: 2,
        title: 'Academic',
        course: [
            {
                id: 0,
                imageUrl: '/ap.jpg',
                largeimageUrl: '/ap-large.jpg',
                courseTitle: 'A&P Refresher',
                courseInfo: 'Refresh yourself on A&P content that is essential for nursing school'
            },

            {
                id: 1,
                imageUrl: '/dosage.jpg',
                largeimageUrl: '/dosage-large.jpg',
                courseTitle: 'Dosage Calculations',
                courseInfo: 'Learn how to do dosage calculations quickly and effectively'
            },

            {
                id: 2,
                imageUrl: '/math.jpg',
                largeimageUrl: '/math-large.jpg',
                courseTitle: 'Math Refresher',
                courseInfo: 'Refresh your math skills for nursing school.',
            },

            {
                id: 3,
                imageUrl: '/medical.jpg',
                largeimageUrl: '/medical-large.jpg',
                courseTitle: 'Medical Terminologies',
                courseInfo: 'Refresh yourself on the commonly used medical terminologies used in nursing school.',
            }
        ]
    },
]

export const eventsData = [
    {
        id: 0,
        title: 'TEAS 7/HESI A2 Anatomy Review Session',
        month: 'August',
        year: '2024',
        date: '18',
        day: 'SUN',
        time: '7:00pm - 7:30pm',
        about: 'TEAS 7/HESI A2 practice questions with step-by-step answer explanations!',
    },

    {
        id: 1,
        title: 'TEAS 7/HESI A2 Math Review Session',
        month: 'August',
        year: '2024',
        date: '19',
        day: 'MON',
        time: '6:00pm - 7:00pm',
        about: 'TEAS 7/HESI A2 practice questions with step-by-step answer explanations!',
    },

    {
        id: 2,
        title: 'TEAS 7/HESI A2 Chemistry Review Session',
        month: 'August',
        year: '2024',
        date: '25',
        day: 'TUE',
        time: '6:30pm - 7:30pm',
        about: 'TEAS 7/HESI A2 practice questions with step-by-step answer explanations!',
    },

    {
        id: 3,
        title: 'TEAS 7/HESI A2 Languages Review Session',
        month: 'August',
        year: '2024',
        date: '28',
        day: 'WED',
        time: '9:00pm - 10:00pm',
        about: 'TEAS 7/HESI A2 practice questions with step-by-step answer explanations!',
    },
]