export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  image?: string
  github?: string
  liveDemo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "hospital-management",
    title: "Hospital Management System",
    description:
      "A comprehensive full-stack hospital management solution with patient records, appointment scheduling, and staff management features.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
    image: "/projects/hospital.jpg",
    github: "https://github.com/waleed488",
    liveDemo: "",
    featured: true,
  },
  {
    id: "ecommerce",
    title: "E-commerce Website",
    description:
      "Full-featured e-commerce platform with product catalog, shopping cart, secure checkout, and order management.",
    techStack: ["React.js", "Redux Toolkit", "Node.js", "MongoDB", "JWT Auth"],
    image: "/projects/ecommerce.jpg",
    github: "https://github.com/waleed488",
    liveDemo: "",
    featured: true,
  },
  {
    id: "food-ordering",
    title: "Food Ordering Website",
    description:
      "Modern food ordering application with real-time order tracking, restaurant listings, and secure payment integration.",
    techStack: ["React.js", "TanStack Query", "Redux Toolkit", "Zod", "JWT Auth"],
    image: "/projects/food.jpg",
    github: "https://github.com/waleed488",
    liveDemo: "",
    featured: true,
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description:
      "Personal finance management app to track expenses, visualize spending patterns, and set budget goals.",
    techStack: ["React.js", "Context API", "Chart.js"],
    image: "/projects/expense.jpg",
    github: "https://github.com/waleed488",
    liveDemo: "",
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe Game",
    description:
      "Interactive Tic Tac Toe game with smooth animations, score tracking, and AI opponent mode.",
    techStack: ["React.js", "CSS3", "Game Logic"],
    image: "/projects/tictactoe.jpg",
    github: "https://github.com/waleed488",
    liveDemo: "",
  },
  {
    id: "todo-app",
    title: "Full Stack Todo App",
    description:
      "Feature-rich todo application with user authentication, task categories, and cloud synchronization.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/projects/todo.jpg",
    github: "https://github.com/waleed488",
    liveDemo: "",
  },
]
