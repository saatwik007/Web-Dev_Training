let barChartInstance = null;
let lineChartInstance = null;

// function buildFactorialTree(n) {
//     if (n === 1) {
//         return { name: `factorial(1) = 1`, children: [] };
//     }
//     return {
//         name: `factorial(${n}) = ${n} × factorial(${n-1})`,
//         children: [buildFactorialTree(n - 1)]
//     };
    
// }
function buildFactorialTree(n) {
    // Helper to calculate factorial recursively
    function factorial(k) {
        if (k === 1) return 1;
        return k * factorial(k - 1);
    }

    // Build tree recursively with value included
    function buildNode(k) {
        const value = factorial(k);
        if (k === 1) {
            return { name: `factorial(1) = 1`, value: 1, children: [] };
        }
        return {
            name: `(${k})! = ${value.toLocaleString()}`,
            value: value,
            children: [buildNode(k - 1)]
        };
    }

    return buildNode(n);
}

function visualize() {
    const input = document.getElementById('numberInput');
    const errorDiv = document.getElementById('errorMsg');
    const resultDiv = document.getElementById('result');
    const stepsDiv = document.getElementById('steps');
    errorDiv.textContent = '';
    resultDiv.textContent = '';
    stepsDiv.textContent = '';

    let n = parseInt(input.value, 10);

    if (isNaN(n) || n < 1) {
        errorDiv.textContent = 'Please enter an integer between 1 and 10!';
        clearCharts();
        clearTree();
        return;
    }
    if (n > 100) {
        errorDiv.textContent = 'Please enter a less value to properly display charts and trees';
        clearCharts();
        clearTree();    
    }

    // Prepare factorials and labels
    let factorials = [];
    let labels = [];
    let stepsArr = [];
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
        labels.push(i.toString());
        factorials.push(factorial);
    }
    for (let i = n; i >= 1; i--) {
        stepsArr.push(i);
    }
    let stepsStr = stepsArr.join(' × ');

    resultDiv.innerHTML = `<b>${n}!</b> = ${factorial.toLocaleString()}`;
    stepsDiv.innerHTML = `<b>Calculation steps:</b><br>${stepsStr} = <b>${factorial.toLocaleString()}</b>`;

    drawBarChart(labels, factorials);
    drawLineChart(labels, factorials);
    drawFactorialTree(n);
}

function drawBarChart(labels, data) {
    const ctx = document.getElementById('barChart').getContext('2d');
    if (barChartInstance) barChartInstance.destroy();
    barChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Factorial Value',
                data: data,
                backgroundColor: "#375a7f55",
                borderColor: "#375a7f",
            }]
        },
        options: {
            responsive: false,
            plugins: { legend: { display: false } }
        }
    });
}

function drawLineChart(labels, data) {
    const ctx = document.getElementById('lineChart').getContext('2d');
    if (lineChartInstance) lineChartInstance.destroy();
    lineChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Factorial Value',
                data: data,
                borderColor: "#375a7f",
                backgroundColor: "#375a7f22",
                pointRadius: 4,
                pointBackgroundColor: "#375a7f",
                fill: false,
                tension: 0.4
            }]
        },
        options: {
            responsive: false,
            plugins: { legend: { display: false } }
        }
    });
}

function clearCharts() {
    if (barChartInstance) { barChartInstance.destroy(); barChartInstance = null; }
    if (lineChartInstance) { lineChartInstance.destroy(); lineChartInstance = null; }
    document.getElementById('barChart').getContext('2d').clearRect(0,0,350,250);
    document.getElementById('lineChart').getContext('2d').clearRect(0,0,350,250);
}

function drawFactorialTree(n) {
    const treeArea = document.getElementById('treeArea');
    treeArea.innerHTML = '';
    if (!n || n < 1) return;

    const treeData = buildFactorialTree(n);
    const nodeHeight = 36, nodeWidth = 350, verticalGap = 1;
    const margin = {top: 15, right: 0, bottom: 10, left: 0};
    const width = 350, height = margin.top + margin.bottom + n * (nodeHeight + verticalGap);

    const svg = d3.select("#treeArea")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    const root = d3.hierarchy(treeData);
    const treeLayout = d3.tree().size([width - margin.left - margin.right, height - margin.top - margin.bottom]);
    treeLayout(root);
    root.descendants().forEach(function(d) {
        d.x = d.x + margin.left;
        d.y = d.y + margin.top;
    });

    svg.selectAll(".link")
        .data(root.links())
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("d", d => {
            return `M${d.source.x},${d.source.y + nodeHeight/2}
                    V${d.target.y - nodeHeight/2}
                    H${d.target.x}
                    V${d.target.y + nodeHeight/2}`;
        })
        .attr("stroke", "#888")
        .attr("fill", "none");

    const node = svg.selectAll(".node")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${d.x - nodeWidth/2},${d.y})`);

    node.append("rect")
        .attr("width", nodeWidth)
        .attr("height", nodeHeight)
        .attr("x", 0)
        .attr("y", -nodeHeight/2)
        .attr("rx", 9)
        .attr("ry", 9)
        .attr("fill", "#375a7f")
        .attr("stroke", "#27476a")
        .attr("stroke-width", 1.5);

    node.append("text")
        .attr("x", nodeWidth/2)
        .attr("y", 6)
        .attr("text-anchor", "middle")
        .attr("fill", "#fff")
        .attr("font-size", "14px")
        .text(d => d.data.name);
}

function clearTree() {
    document.getElementById('treeArea').innerHTML = '';
}