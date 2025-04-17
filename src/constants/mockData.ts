export interface Quest {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  views: number;
  coins: number;
  users: number;
  createdDaysAgo: number;
  skills: string[];
  objectives: string[];
  deadlines: string;
  difficultyLevel: 'Easy' | 'Medium' | 'Hard';
  questMode: 'Automatic' | 'Manual';
  progress: number;
  actions: string[];
  skillQuestLevel?: string;
}

export interface QuestDetail extends Quest {
  startDate?: string;
  endDate?: string;
  completionStatus?: string;
  nextSteps?: string[];
  requiredActions?: string[];
}

export const questsData: Quest[] = [
  {
    id: '1',
    title: 'Talk to Edmund At The Uppsala Observatory',
    description: 'Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory.',
    imageSrc: '/images/sample-img.png',
    level: 'Beginner',
    views: 10,
    coins: 1450,
    users: 2300,
    createdDaysAgo: 3,
    skills: ['Communication', 'Navigation'],
    objectives: ['Find Edmund', 'Talk to Edmund', 'Get information about the stars'],
    deadlines: '2023-12-31',
    difficultyLevel: 'Easy',
    questMode: 'Manual',
    progress: 65,
    actions: ['Talk', 'Listen', 'Ask questions']
  },
  {
    id: '2',
    title: 'Talk to Edmund At The Uppsala Observatory',
    description: 'Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory.',
    imageSrc: '/images/sample-img.png',
    level: 'Beginner',
    views: 10,
    coins: 1450,
    users: 2300,
    createdDaysAgo: 3,
    skills: ['Research', 'Observation'],
    objectives: ['Find Edmund', 'Talk to Edmund', 'Get information about the stars'],
    deadlines: '2023-12-15',
    difficultyLevel: 'Medium',
    questMode: 'Automatic',
    progress: 25,
    actions: ['Observe', 'Document', 'Report']
  },
  {
    id: '3',
    title: 'Talk to Edmund At The Uppsala Observatory',
    description: 'Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory.',
    imageSrc: '/images/sample-img.png',
    level: 'Beginner',
    views: 10,
    coins: 1450,
    users: 2300,
    createdDaysAgo: 3,
    skills: ['Astronomy', 'Analysis'],
    objectives: ['Find Edmund', 'Talk to Edmund', 'Get information about the stars'],
    deadlines: '2024-01-05',
    difficultyLevel: 'Hard',
    questMode: 'Manual',
    progress: 90,
    actions: ['Calculate', 'Analyze', 'Conclude']
  },
  {
    id: '4',
    title: 'Talk to Edmund At The Uppsala Observatory',
    description: 'Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory.',
    imageSrc: '/images/sample-img.png',
    level: 'Beginner',
    views: 10,
    coins: 1450,
    users: 2300,
    createdDaysAgo: 3,
    skills: ['Telescope Use', 'Documentation'],
    objectives: ['Find Edmund', 'Talk to Edmund', 'Get information about the stars'],
    deadlines: '2023-12-20',
    difficultyLevel: 'Easy',
    questMode: 'Automatic',
    progress: 50,
    actions: ['Setup telescope', 'Observe', 'Record']
  },
  {
    id: '5',
    title: 'Talk to Edmund At The Uppsala Observatory',
    description: 'Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory.',
    imageSrc: '/images/sample-img.png',
    level: 'Beginner',
    views: 10,
    coins: 1450,
    users: 2300,
    createdDaysAgo: 3,
    skills: ['Persuasion', 'Negotiation'],
    objectives: ['Find Edmund', 'Talk to Edmund', 'Get information about the stars'],
    deadlines: '2024-01-10',
    difficultyLevel: 'Medium',
    questMode: 'Manual',
    progress: 15,
    actions: ['Convince', 'Negotiate', 'Agree']
  },
  {
    id: '6',
    title: 'Talk to Edmund At The Uppsala Observatory',
    description: 'Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory.',
    imageSrc: '/images/sample-img.png',
    level: 'Beginner',
    views: 10,
    coins: 1450,
    users: 2300,
    createdDaysAgo: 3,
    skills: ['Problem Solving', 'Critical Thinking'],
    objectives: ['Find Edmund', 'Talk to Edmund', 'Get information about the stars'],
    deadlines: '2023-12-25',
    difficultyLevel: 'Hard',
    questMode: 'Automatic',
    progress: 75,
    actions: ['Analyze', 'Solve', 'Conclude']
  },
  {
    id: '7',
    title: 'Talk to Edmund At The Uppsala Observatory',
    description: 'Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory.',
    imageSrc: '/images/sample-img.png',
    level: 'Beginner',
    views: 10,
    coins: 1450,
    users: 2300,
    createdDaysAgo: 3,
    skills: ['Map Reading', 'Navigation'],
    objectives: ['Find Edmund', 'Talk to Edmund', 'Get information about the stars'],
    deadlines: '2024-01-15',
    difficultyLevel: 'Easy',
    questMode: 'Manual',
    progress: 35,
    actions: ['Study map', 'Navigate', 'Find']
  },
  {
    id: '8',
    title: 'Talk to Edmund At The Uppsala Observatory',
    description: 'Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory. Talk to Edmund at the Uppsala Observatory.',
    imageSrc: '/images/sample-img.png',
    level: 'Beginner',
    views: 10,
    coins: 1450,
    users: 2300,
    createdDaysAgo: 3,
    skills: ['Time Management', 'Planning'],
    objectives: ['Find Edmund', 'Talk to Edmund', 'Get information about the stars'],
    deadlines: '2023-12-28',
    difficultyLevel: 'Medium',
    questMode: 'Automatic',
    progress: 45,
    actions: ['Plan', 'Execute', 'Evaluate']
  }
];

export const questDetailsData: Record<string, QuestDetail> = {
  '1': {
    ...questsData[0],
    startDate: '2023-11-15',
    endDate: '2023-12-31',
    completionStatus: 'In Progress',
    nextSteps: ['Reach the observatory', 'Find Edmund', 'Engage in conversation'],
    requiredActions: ['Complete previous quest', 'Obtain observatory map', 'Learn astronomy basics'],
    skillQuestLevel: 'Level 2'
  },
  '2': {
    ...questsData[1],
    startDate: '2023-11-20',
    endDate: '2023-12-15',
    completionStatus: 'Not Started',
    nextSteps: ['Review requirements', 'Prepare equipment', 'Contact guide'],
    requiredActions: ['Register for observatory access', 'Complete safety training', 'Acquire telescope license'],
    skillQuestLevel: 'Level 1'
  },
  '3': {
    ...questsData[2],
    startDate: '2023-12-01',
    endDate: '2024-01-05',
    completionStatus: 'Almost Complete',
    nextSteps: ['Finalize documentation', 'Submit report', 'Schedule follow-up'],
    requiredActions: ['Complete star mapping', 'Analyze celestial data', 'Draft findings report'],
    skillQuestLevel: 'Level 3'
  }
}; 