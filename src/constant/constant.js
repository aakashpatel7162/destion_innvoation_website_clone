const data = {
  emailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  passRegex: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{5,12}$/,
  errorMessages: {
    email: "email is not correct",
    password: "Password is to week uppercase,lowercase and number",
    username: "Username is to small",
    number: "number is not correct",
    loginPass: "Password is not correct uppercase,lowercase and number",
    confPassword: "Password is not match",
  },
  destion_invotion: "Destion Invoation",
  sideBar: [
    {
      id: "1",
      name: "DashBoard",
      logo: "",
      path: "/",
    },
    {
      id: "2",
      name: "Profile",
      logo: "",
      path: "/profile",
    },
    {
      id: "3",
      name: "Settings",
      logo: "",
      path: "/settings",
    },
    {
      id: "4",
      name: "Contact us",
      logo: "",
      path: "/contactUs",
    },
    {
      id: "5",
      name: "About us",
      logo: "",
      path: "/aboutUs",
    },
  ],
  dashBoardUsPage: {
    welcomeMess:
      " Welcome to your dashboard! Here, you can view your key metrics, manage your accounts, and access various features tailored to your needs.",

    findUs:
      " You can learn more about us by searching for our company on Google.Here’s an example image related to our fields:",
  },
  aboutUsPage: {
    heading:
      ", we are dedicated to transforming the landscape of fintech and healthcare through innovative solutions and cutting-edge technology. Our mission is to empower individuals and businesses to make informed financial decisions whileensuring access to quality healthcare.",
    heading2:
      "  We envision a world where finance and healthcare are interconnected,making services accessible and intuitive for everyone. Through ourcommitment to innovation, we strive to be at the forefront of thesedynamic fields.",
    headings: [
      "Our Team",
      "Innovative Solutions",
      "Healthcare Technology",
      "Find Us on Google",
    ],
    findUs:
      " You can learn more about us by searching for our company on Google.Here’s an example image related to our fields:",
  },
};
export default data;
