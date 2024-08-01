// This array is Mimicking Data which is usually captured through an API

import { title } from "process"

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
        coverImg: "/student.jpg",
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

    {
        id: 5,
        title: "One-on-One Tutoring",
        description: "Personalized tutoring with expert instructors. Focus on individual strengths and weaknesses to maximize improvement.",
        coverImg: "/oneonone.jpg",
        buttonText: 'Get started'
    },

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

    {
        id: 8,
        title: "Community Support",
        description: "Online community for students to ask questions, share experiences, and support each other. Moderated by instructors and alumni for accurate information and guidance.",
        coverImg: "/community.jpg",
        buttonText: 'Get started'
    },

    {
        id: 9,
        title: "Exam Day Preparation",
        description: "Tips and strategies for managing time, handling stress, and maximizing performance on exam day. Mock exams under timed conditions to simulate the real exam experience. Comprehensive checklists to ensure students are fully prepared for exam day.",
        coverImg: "/examday.jpg",
        buttonText: 'Get started',
    },
    
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
        id: 1,
        access: 'Monthly',
        pricing: '29',
        period: 'month',
        ideal: 'Ideal for students testing within two months',
        className: 'pricing-card p-8 flex flex-col gap-8 month relative'
    },

    {
        id: 2,
        access: 'Quarterly',
        pricing: '75',
        period: '3 months',
        ideal: 'Ideal for students testing in three months or later',
        className: 'pricing-card p-8 flex flex-col gap-8 quarter relative',
        save: 'Save $12'
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