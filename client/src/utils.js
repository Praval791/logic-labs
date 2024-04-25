export const tagsData = [
  "2D Array",
  "Approximation Algorithms",
  "Array",
  "Articulation Points",
  "Backtracking",
  "Backtracking",
  "Binary Indexed Tree",
  "Binary Search",
  "Bipartite Graphs",
  "Bitmasks",
  "Bridges in Graphs",
  "Bruteforce",
  "Combinatorics",
  "Constructive Algorithms",
  "Convex Hull",
  "Counting",
  "Data Structures",
  "DFS and Similar",
  "Divide and Conquer",
  "DSU",
  "Dynamic Programming Techniques",
  "Dynamic Programming",
  "Eulerian Path",
  "Fenwick Tree",
  "Flows",
  "Games",
  "Geometry",
  "Graphs",
  "Greedy Techniques",
  "Greedy",
  "Hamiltonian Cycle",
  "Hash Table",
  "Hashing",
  "Heap",
  "Implementation",
  "Line Sweep",
  "Linked Lists",
  "Math",
  "Meet in the Middle",
  "Memoization",
  "Minimum Spanning Trees",
  "Modular Arithmetic",
  "Number Theory",
  "Queue",
  "Recursion",
  "Segment Tree",
  "Shortest Paths",
  "Sieve",
  "Sortings",
  "Stack",
  "String Matching",
  "Strings",
  "Strongly Connected Components",
  "Suffix Array",
  "Summation",
  "Ternery Search",
  "Topological Sort",
  "Trees",
  "Two Pointers",
  // Additional tags
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
