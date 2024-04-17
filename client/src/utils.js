export const tagsData = [
  "Binary Search",
  "Array",
  "2D Array",
  "Summation",
  "Strings",
  "Bitmasks",
  "Bruteforce",
  "Combinatorics",
  "Constructive Algorithms",
  "Data Structures",
  "DFS and Similar",
  "Divide and Conquer",
  "Dynamic Programming",
  "DSU",
  "Flows",
  "Games",
  "Graphs",
  "Greedy",
  "Implementation",
  "Math",
  "Number Theory",
  "Shortest Paths",
  "Sortings",
  "Ternery Search",
  "Trees",
  "Two Pointers",
];

export const getDifficulty = (problem) => {
  if (problem.countTotal === 0) {
    return "Hard";
  } else {
    let ratio = problem.countAC / problem.countTotal;
    if (ratio > 0.7) return "Easy";
    else if (ratio > 0.3) return "Medium";
    else return "Hard";
  }
};

export const getAcceptance = (problem) => {
  if (problem.countTotal === 0) {
    return 0;
  } else {
    return Math.round((problem.countAC / problem.countTotal) * 100);
  }
};

export const getDateTime = (value) => {
  const date =
    new Date(value).toLocaleString("default", {
      month: "short",
    }) +
    " " +
    new Date(value).getDate() +
    ", " +
    new Date(value).getFullYear();
  const time = new Date(value).toLocaleTimeString();
  return date + " " + time;
};
