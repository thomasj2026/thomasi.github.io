---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

{% comment %} This mirrors your resume. Keep the two in sync when you update one. {% endcomment %}

Education
======
* M.Eng. in Mechanical Engineering (Robotics & Control concentration), Cornell University, Aug 2026 – May 2027
  * MEC Fellowship ($30,000) and Academic Tuition Scholarship ($6,000)
* B.S. in Mechanical Engineering, **Summa Cum Laude**, GPA: 3.98, University of Hawai'i at Mānoa, Aug 2023 – May 2026
  * Manoa Academic Scholarship ($12,000) and ASUH Research Scholarship ($1,000)
  * Relevant coursework: Robot Perception, Legged Robots, Model-Based Estimation, Autonomous Mobile Robots, Swarm Robotics, Maritime Robotics, Soft Robotics, Manipulator Robotics

Work experience
======
* Sept 2026 – Present: Software Engineer
  * ASML, Ithaca, NY
  * Re-architected a legacy LabVIEW control system into a modular ROS 2 stack for a reticle-handling robotic arm, reverse-engineering the existing control logic and rebuilding it as custom C++ nodes
  * Derived forward/inverse kinematic models and Jacobian-based force mapping to enable closed-loop velocity control of the arm
  * Designed a custom end effector for precise reticle pick-and-place

* May 2024 – July 2026: Mobile Robotics Research Assistant
  * RIP Lab, Honolulu, HI
  * Optimized magnetic-adhesion geometry in MATLAB and COMSOL FEA to achieve stable vertical-surface operation for a 50-lb climbing robot
  * Built a C++ ROS 2 pipeline fusing dual 9-DOF IMU streams through an Extended Kalman Filter, visualized live in RViz2
  * Built a Python tool that tracks battery-enclosure temperature within 5% of a reference sensor

* Aug 2025 – May 2026: Lead Software Engineer
  * Team Kanaloa, Honolulu, HI
  * Designed and built a 400-lb unmanned surface vessel with a self-righting hull for the RobotX competition
  * Ran comparative FEA across hull composite layups (XPS foam core, 10oz fiberglass, marine-grade epoxy) to achieve a factor of safety of 5 in 4-foot wave conditions
  * Implemented an EKF fusing GPS, IMU, and encoder data with RTCM correction for centimeter-level localization

* May 2024 – May 2025: Soft Robotics Research Assistant
  * SAIL Lab, Honolulu, HI
  * Designed and iterated pectoral fin prototypes cast in Dragon Skin silicone from FDM-printed molds
  * Wrote embedded C++ control software on Arduino for PWM-driven pneumatic servo actuation
  * Built a Python tool that analytically computes the 3D magnetic field of a permanent magnet, validated to >90% accuracy

Skills
======
* Robotics & Controls
  * ROS2, PID control, forward/inverse kinematics, Jacobian-based force control
  * Extended Kalman Filter (EKF) sensor fusion, state estimation, embedded systems, PWM servo actuation
* Software
  * Python, C++, MATLAB, Linux, PyTorch, MuJoCo, Gazebo, RViz2, Arduino IDE
* Mechanical & Hardware
  * SolidWorks, Onshape, COMSOL (FEA), CNC, mill, lathe, bandsaw, drill press
  * FDM & resin 3D printing, Arduino, Raspberry Pi, Teensy, I2C/UART/SPI/USB

Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Honors & activities
======
* Pi Tau Sigma Honor Society
* American Society of Mechanical Engineers (ASME)
* Institute of Electrical and Electronics Engineers (IEEE)
