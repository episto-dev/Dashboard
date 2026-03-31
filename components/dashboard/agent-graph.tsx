import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { PERSONA_COLORS } from '@/lib/constants'

export function AgentGraph({ agents }: { agents: any[] }) {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const svg = d3.select(ref.current)
    svg.selectAll('*').remove() // Clear previous

    const width = 400
    const height = 400

    // Create hexagonal grid positions for 50 nodes
    const positions: { x: number; y: number }[] = []
    const rows = 10
    const cols = 5
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * 80 + (row % 2) * 40
        const y = row * 70
        positions.push({ x, y })
      }
    }

    // Create nodes
    const nodes = positions.map((pos, i) => ({
      id: i,
      x: pos.x,
      y: pos.y,
      color: PERSONA_COLORS[i % PERSONA_COLORS.length]
    }))

    // Force simulation
    const simulation = d3.forceSimulation(nodes)
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('charge', d3.forceManyBody().strength(-50))
      .force('collision', d3.forceCollide().radius(20))

    // Draw nodes
    const node = svg.selectAll('circle')
      .data(nodes)
      .enter().append('circle')
      .attr('r', 15)
      .attr('fill', d => d.color)
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)

    simulation.on('tick', () => {
      node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
    })

  }, [agents])

  return <svg ref={ref} width={400} height={400} className="border"></svg>
}