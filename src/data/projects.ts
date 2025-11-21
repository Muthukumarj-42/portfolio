import Thumbnail from "../assets/certificates/Thumbnail.jpg";
import banner from "../assets/certificates/Banner.jpg";
import fsm from "../assets/certificates/FSM.png";
import flight from "../assets/certificates/Flight.png";

export const projects = [
  {
    id: 1,
    category: "electronics",
    title: "Water Quality Monitoring System – Portable Kit",
    shortDesc: "Portable IoT-enabled water quality analysis kit.",
    tags: ["IoT", "Sensors", "Embedded"],
    details: `
      <h2>Water Quality Monitoring System – Portable Kit</h2>

      <h3>Overview</h3>
      <p>
        A portable IoT-based system for real-time analysis of water parameters such as pH, turbidity, 
        TDS, and temperature. The project was <strong>shortlisted for Yukti Innovation Challenge 2025 – AICTE</strong>.
      </p>

      <ul>
        <li><strong>Duration:</strong> 6 Months (Ongoing)</li>
        <li><strong>Team Size:</strong> 3 Members</li>
        <li><strong>Role Played:</strong> Hardware development, IoT integration</li>
        <li><strong>Experience:</strong> Industrial analog sensor calibration in IoT Special Lab</li>
      </ul>
    `,
  },

  {
    id: 2,
    category: "electronics",
    title: "Fetal Monitoring Wearable Belt",
    shortDesc: "IoT-based wearable belt for fetal heartbeat monitoring.",
    tags: ["Healthcare", "IoT", "Wearable"],
    details: `
      <h2>Fetal Monitoring Wearable Belt</h2>

      <h3>Overview</h3>
      <p>
        A wearable IoT belt designed to monitor fetal vitals continuously. Developed under 
        guidance from faculty and senior research scholars in biomedical engineering.
      </p>

      <ul>
        <li><strong>Duration:</strong> 6 Months (Ongoing)</li>
        <li><strong>Team Size:</strong> 3 Members</li>
        <li><strong>Role Played:</strong> Hardware development & IoT architecture</li>
        <li><strong>Experience:</strong> Gained expertise in healthcare ubiquitous computing</li>
      </ul>
    `,
  },
  {
    id: 3,
    category: "electronics",
    title: "Safe Autonomous Navigation using Mobile Sensors",
    shortDesc: "Using smartphone sensors to enable safe autonomous navigation.",
    tags: ["Mobile Sensors", "AI", "Navigation"],
    details: `
      <h2>Safe Autonomous Navigation using Mobile Phone Sensors</h2>

      <h3>Overview</h3>
      <p>
        A cooperative mobile-sensor-based navigation system that helps autonomous vehicles 
        navigate safely using only smartphone IMU + GNSS data.
      </p>

      <ul>
        <li><strong>Duration:</strong> Sep 2025 – Nov 2025</li>
        <li><strong>Team Size:</strong> 6 Members</li>
        <li><strong>Role Played:</strong> Ideation & system design</li>
        <li><strong>Experience:</strong> Learned problem-solving through hackathons</li>
      </ul>
    `,
  },
  {
    id: 4,
    category: "electronics",
    title: "Smart Door Access Control System (RFID – FSM on FPGA)",
    shortDesc: "FPGA Door access control system using Verilog.",
    tags: ["FPGA", "Verilog", "Security"],
    img: fsm,
    viewLink: "https://github.com/Muthukumarj-42/smart-door-fsm",
    details: `
  <h3>Overview</h3>
  <p>
    A <strong>Finite State Machine (FSM)</strong> based Smart Door Access Control System implemented in 
    <strong>Verilog</strong> on the <strong>Xilinx Zynq-7000 FPGA</strong>. The system simulates RFID 
    authentication using <strong>8 slide switches</strong> as RFID input along with push buttons for 
    submission and reset. It verifies the input data against stored valid IDs and provides clear 
    <em>Access Granted / Access Denied</em> signals with a door unlock output.
  </p>

  <ul>
    <li><strong>Duration:</strong> 1 Week</li>
    <li><strong>Team Size:</strong> 2 Members</li>
    <li><strong>Role Played:</strong> Verilog coding, FSM design & FPGA implementation</li>
    <li><strong>Experience:</strong> Learned practical FSM design, simulation debugging, and real-time 
        hardware deployment in the VLSI Special Lab</li>
  </ul>

  <h3>Key Features</h3>
  <ul>
    <li>FSM-based clean state transitions</li>
    <li>Supports two valid RFID IDs (8'h33 & 8'hA1)</li>
    <li>LED-based <strong>Access Granted / Denied</strong> indicators</li>
    <li>Door unlock signal generation for valid input</li>
    <li>Automatic return to IDLE state after each check</li>
    <li>Simulation testbench verifies transitions & outputs</li>
  </ul>

  <h3>Hardware Used</h3>
  <ul>
    <li>Xilinx Zynq-7000 ZedBoard</li>
    <li>8 Slide Switches — RFID Input</li>
    <li>Push Button (Submit)</li>
    <li>Push Button (Reset)</li>
    <li>LEDs for system state output</li>
  </ul>

  <h3>FSM Diagram / Waveform</h3>
  <img src="https://raw.githubusercontent.com/Muthukumarj-42/smart-door-fsm/d34c248c3e0a9bc855ed3aaa3d299cf9988a8627/Images/FSM-GRAPH.jpg" 
       style="width:100%; border-radius:10px; margin-top:15px;" />
`,
  },
  {
    id: 5,
    category: "design",
    title: "BGMI/PUBS Thumbnails ",
    shortDesc:
      "Creative and attractive thumbnails for gaming creators(youtube)",
    tags: ["Photoshop", "Color-Theory", "Typography"],
    viewLink:
      "https://drive.google.com/drive/folders/1aiBcLeaQA6P7nlotTUT-oCjUhmJQzo8N?usp=drive_link",

    img: Thumbnail,
    details: `
      <h3>Overview</h3>
      <p>
        Creative and visually engaging thumbnails designed specifically for gaming content creators to increase audience engagement and click-through rates on YouTube
      </p>

      <ul>
        <li><strong>Role Played:</strong> Graphic Designer & Creative Strategist</li>
        <li><strong>Experience:</strong> Learned advanced composition, color psychology, typography and viewer-attention techniques</li>
      </ul>

    `,
  },
  {
    id: 6,
    category: "design",
    title: "BGMI/PUBS Banners and overlays ",
    shortDesc:
      "Creative and attractive banners and overlays for gaming creators(youtube)",
    tags: ["Photoshop", "Color-Theory", "Typography"],
    img: banner,
    viewLink:
      "https://drive.google.com/drive/folders/1jrotMM781By-jLDCdmXNBG9MoKLB5jHf?usp=drive_link",
    details: `
      <h3>Overview</h3>
      <p>
        Professional gaming banners and overlays crafted for streamers, YouTube creators, and esports players—designed to match branding, personality, and stream aesthetics.
      </p>

      <ul>
        <li><strong>Role Played:</strong> Graphic Designer & Creative Strategist</li>
        <li><strong>Experience:</strong> Learned modern UI layouts, gaming theme aesthetics, color grading, and esport-style composition</li>
      </ul>

    `,
  },
  {
    id: 7,
    category: "design",
    title: "Flight Ticket Booking App – UI Design",
    shortDesc:
      "Clean and intuitive UI/UX design for a modern flight ticket booking application.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    img: flight,
    viewLink:
      "https://www.figma.com/design/T5B4RlMm767KULYynKIuo8/Untitled?node-id=0-1&t=OiL5IufLXvIk2gPL-1",

    details: `
    <h3>Overview</h3>
    <p>
      A complete flight booking app UI designed with a modern aviation theme. 
      The design covers the full user journey including flight search, ticket details, 
      seat selection, and boarding pass generation. The interface focuses on clarity, 
      fast navigation, strong visual hierarchy, and a clean red–white airline-inspired style.
    </p>

    <ul>
      <li><strong>Screens Included:</strong> Flight search & listing, ticket/boarding pass view, and seat selection.</li>
      <li><strong>Role Played:</strong> UI/UX Designer – wireframing, layout design, prototyping, and visual styling.</li>
      <li><strong>Experience:</strong> Learned workflow structuring, information hierarchy balance, aviation UI standards, 
      and designing intuitive multi-step user flows.</li>
    </ul>
  `,
  },
];
