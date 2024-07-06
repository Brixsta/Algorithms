const graph = {
  A: ["B", "D"],
  B: ["A", "C", "E"],
  C: ["B"],
  D: ["A", "E"],
  E: ["B", "D", "F"],
  F: ["E"],
};

const DFS = (graph, root) => {
  const stack = [root];
  const result = [];
  const visited = new Set();

  while (stack.length) {
    const vertex = stack.pop();

    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      for (let i = 0; i < graph[vertex].length; i++) {
        let neighbor = graph[vertex][i];

        stack.push(neighbor);
      }
    }
  }
  return result;
};
