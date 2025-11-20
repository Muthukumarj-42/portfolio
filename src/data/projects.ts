import stm32 from "../assets/certificates/STM32.jpg";

export const projects = [
  // ===========================================================
  // PRODUCT PROJECTS
  // ===========================================================
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

  // ===========================================================
  // SIH & MAJOR PROJECTS
  // ===========================================================
  {
    id: 3,
    category: "electronics",
    title: "AI & IoT Elephant Movement Detection System",
    shortDesc: "Real-time intelligent elephant detection using AI + IoT.",
    tags: ["AI", "IoT", "Wildlife Safety"],
    img: stm32, // ⭐ YOUR IMAGE HERE
    details: `
      <h2>AI & IoT Powered Elephant Movement Detection System</h2>

      <h3>Overview</h3>
      <p>
        A real-time elephant intrusion detection and alerting system combining AI, IoT, and 
        sensor fusion. Submitted to <strong>Smart India Hackathon 2025</strong>.
      </p>

      <ul>
        <li><strong>Duration:</strong> Sep 2025 – Nov 2025 (3 Months)</li>
        <li><strong>Team Size:</strong> 6 Members</li>
        <li><strong>Role Played:</strong> Hardware-Software IoT integration & field testing</li>
        <li><strong>Experience:</strong> Learned advanced IoT deployments & testing in special labs</li>
      </ul>
  `,
  },

  {
    id: 4,
    category: "electronics",
    title: "Water Quality Monitoring System (SIH Version)",
    shortDesc: "Advanced IoT water quality monitoring for SIH.",
    tags: ["IoT", "Analytics"],
    details: `
      <h2>Water Quality Monitoring System – SIH Edition</h2>

      <h3>Overview</h3>
      <p>
        Enhanced IoT-enabled water quality monitoring project submitted to 
        <strong>Smart India Hackathon 2025</strong>.
      </p>

      <ul>
        <li><strong>Duration:</strong> 2 Months</li>
        <li><strong>Team Size:</strong> 6 Members</li>
        <li><strong>Role Played:</strong> IoT Integration & System Testing</li>
        <li><strong>Experience:</strong> Hands-on experience in advanced sensor interfacing</li>
      </ul>
    `,
  },

  {
    id: 5,
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

  // ===========================================================
  // MINI PROJECTS
  // ===========================================================
  {
    id: 6,
    category: "electronics",
    title: "RFID-Based Door Lock System (FSM on FPGA)",
    shortDesc: "Two-week FPGA access control system using Verilog.",
    tags: ["FPGA", "Verilog", "Security"],
    details: `
      <h2>RFID Door Lock System using FSM on FPGA</h2>

      <h3>Overview</h3>
      <p>
        A secure FPGA-based door access system using RFID authentication with a 
        custom Verilog-coded FSM.
      </p>

      <ul>
        <li><strong>Duration:</strong> 2 Weeks</li>
        <li><strong>Team Size:</strong> 2 Members</li>
        <li><strong>Role Played:</strong> Verilog coding & FPGA implementation</li>
        <li><strong>Experience:</strong> Learned advanced digital design in VLSI Special Lab</li>
      </ul>

    `,
    img: "../assets/certificates/STM32.jpg", // local image (public/images/)
  },
];
