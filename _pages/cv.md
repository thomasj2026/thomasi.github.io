---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<!-- This mirrors your resume. Keep the two in sync when you update one. -->

Education
======
* <span class="cv-entry"><span>M.Eng. in Mechanical Engineering (Robotics & Controls), Cornell University</span><span class="cv-date">Aug 2026 – May 2027</span></span>
  * MEC Fellowship ($30,000) and Academic Tuition Scholarship ($6,000)
* <span class="cv-entry"><span>B.S. in Mechanical Engineering, **Summa Cum Laude**, GPA: 3.98, University of Hawai'i at Mānoa</span><span class="cv-date">Aug 2023 – May 2026</span></span>
  * Manoa Academic Scholarship ($12,000) and ASUH Research Scholarship ($1,000)
  * Selected coursework: Robot Perception, Model-Based Estimation, Autonomous Mobile Robots, Manipulator Robotics, Legged Robots, Swarm Robotics, Maritime Robotics, Soft Robotics, Continuum Mechanics

Work experience
======
* Sept 2026 – Present: Robotics Engineer
  * ASML, Ithaca, NY
  * Re-architecting a legacy LabVIEW control system into a modular ROS 2 stack of custom C++/Python nodes for a reticle-handling robotic arm
  * Validating control logic and testing safety in a Gazebo simulation with MoveIt 2 before running on the arm
  * Enabling closed-loop, real-time velocity control of a multi-axis arm by deriving forward/inverse kinematics and Jacobian-based force mapping that convert end-effector targets into joint-space commands

* May 2024 – July 2026: Mobile Robotics Research Assistant
  * RIP Lab, Honolulu, HI
  * Achieved stable vertical-surface operation for a 50-lb magnetic climbing robot by optimizing wheel and magnet geometry through MATLAB and COMSOL simulation before fabrication
  * Cut prototype iteration time by designing parts such as sensor housings and caster wheels in Onshape and producing them in-house with FDM and resin 3D printing
  * Provided real-time orientation feedback by building a C++ ROS 2 pipeline that fuses dual 9-DOF IMU streams with an Extended Kalman Filter and visualizes the state live in RViz2
  * Built an enclosure with cooling fan, heater, and I2C temperature sensor, with a Python tool to track temperature within 5% of a reference sensor, simulating heat generation from batteries in the enclosure

* Aug 2025 – May 2026: Lead Systems Engineer
  * Team Kanaloa, Honolulu, HI
  * Led a team building a 400-lb autonomous surface vessel; validated the Python/C++ PID control and autonomy stack in Gazebo (URDF model, checked against a Fossen hydrodynamic model) before on-water testing
  * Achieved centimeter-level real-time localization by implementing an EKF node that fuses 3 GPS modules and 2 IMUs with RTCM corrections
  * Wrote low-level ROS 2 drivers (I2C, UART, SPI, USB), designed a custom sensor PCB in KiCad, and integrated ESCs with live feedback and a Ubiquiti radio link for real-time communication during field testing
  * Ran comparative FEA in SolidWorks across hull composite layups to select a design with a factor of safety of 5 in 4-foot wave conditions

Projects
======
* Aug 2026 – Present: Unitree Go2 X Quadruped Robot Dog
  * Ithaca, NY
  * Building a MuJoCo simulation environment of the Go2 and training a locomotion policy with deep reinforcement learning (PPO) in PyTorch
  * Designing the observation/action spaces, reward function, and training curriculum, with domain randomization to improve sim-to-real transfer, then deploying the trained policy and validating the pipeline via unit tests

* Aug 2026 – Present: Autonomous Path Planning of a Differential Drive Robot
  * Ithaca, NY
  * Building a ROS 2 autonomy stack with Nav2 and ros2_control in Gazebo that maps unknown environments with SLAM using a lidar, wheel odometry, and slam_toolbox to navigate autonomously
  * Implementing global path planning with A* over an inflated occupancy-grid costmap and tracking paths with a DWB local planner for dynamic obstacle avoidance
  * Tuning costmap inflation, controller, and recovery-behavior parameters to achieve robust goal-reaching in simulation

Technical skills
======
* Software
  * Python, MATLAB, ROS 2, Gazebo, MoveIt 2, KiCad, C++, MuJoCo, Linux, Git/GitHub, PyTorch
* Hardware
  * SolidWorks, Onshape, COMSOL, FDM & resin 3D printing, CNC/mill/lathe, Arduino, Teensy, Raspberry Pi, I2C/UART/SPI/USB, PWM motor actuation, soldering, and tensile testing

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
