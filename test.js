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
  const visited = new Set();
  const result = [];

  while (stack.length) {
    const vertex = stack.pop();

    if (!visited.has(vertex)) {
      console.log(vertex);
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

console.log(DFS(graph, "A"));

// RESULT -> [ 'A', 'D', 'E', 'F', 'B', 'C' ]0
