// breadth first search

const graph = {
  A: ["B", "D"],
  B: ["A", "C", "E"],
  C: ["B"],
  D: ["A", "E"],
  E: ["B", "D", "F"],
  F: ["E"],
};

function bfs(graph, start) {
  const queue = [start];
  const visited = new Set();
  const result = [];

  while (queue.length) {
    const vertex = queue.shift();

    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      for (let i = 0; i < graph[vertex].length; i++) {
        let neighbor = graph[vertex][i];
        queue.push(neighbor);
      }
    }
  }

  return result;
}

console.log(bfs(graph, "A"));
