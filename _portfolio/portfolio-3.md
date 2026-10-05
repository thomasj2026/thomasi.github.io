---
title: "Magnetic-Adhesion Climbing Robot — RIP Lab"
excerpt: "Magnetic wheeled infrastructure inspection robot."
collection: portfolio
role: "Mobile Robotics Research Assistant · RIP Lab"
dates: "May 2024 – July 2026"
gallery:
  - file: climbing-robot.jpg
    alt: "Magnetic-adhesion infrastructure inspection robot"
  - file: rip-caster-wheel.jpg
    alt: "Swing-arm caster with a blue-taped magnetic wheel mounted under the robot frame"
    caption: "Magnetic wheel on a swing-arm caster mounted to the robot frame"
  - file: rip-wheel-lattice-test.jpg
    alt: "Black 3D-printed lattice wheel with rim magnets resting on a steel plate in a tensile testing machine"
    caption: "Wheel pull-off testing: Investigating compliant magnetic wheel designs with 95A TPU"
  - file: rip-wheel-test.jpg
    alt: "Magnetic wheel prototype mounted in a tensile testing machine above a steel plate"
    caption: "Verifying adhesion force for final curvature and magnet geometry design"
  - file: rip-wheel-force-model.png
    alt: "Measured wheel pull-off force compared with a fitted inverse-power-law model and residuals"
    caption: "Wheel pull-off force vs. distance: measured data and fitted inverse-power-law model"
  - file: rip-test-rig.jpg
    alt: "Wall-mounted test rig with kettlebells on an aluminum frame, motors, a motor driver board, and wiring"
    caption: "Wall-mounted test rig with additional load of 22lbs on the robot"
  - file: rip-port-enclosure-cad.png
    alt: "Onshape CAD render of designed PORT electronics enclosure with custom strain relief wire design"
    caption: "Onshape CAD render of designed PORT electronics enclosure with custom strain relief wire design"
  - file: rip-battery-enclosure.jpg
    alt: "Clear battery enclosure with cells, fan, heater, and microcontroller"
    caption: "Battery enclosure testing jig with cooling fan, heating element, and I2c temperature sensor"
  - file: rip-enclosure-heat-model.png
    alt: "Measured enclosure temperature compared with a two-node lumped heat transfer model"
    caption: "Enclosure temperature vs. time: measured data and two-node lumped heat transfer model (12 V heater and fan)"
tech: ["Onshape", "MATLAB", "COMSOL", "Python"]
date: 2026-07-01
header:
  teaser: portfolio/climbing-robot.jpg
---

{% include gallery.html %}

**Role:** Mobile Robotics Research Assistant · RIP Lab &nbsp;|&nbsp; **When:** May 2024 – July 2026

Designed and developed a 50-lb robot that inspects and climbs steel surfaces using magnetic adhesion, from the magnet geometry through the sensor-fusion software that keeps it stable.

* Optimized magnetic-adhesion geometry in MATLAB and COMSOL FEA before fabrication to achieve stable vertical-surface operation, operating at speeds of 0.1 m/s.
* Rapid-prototyped robotic parts such as sensor housings and caster wheels in Onshape, produced in-house via FDM and resin 3D printing
* Built a Python/C++ ROS 2 pipeline that fuses dual 9-DOF IMU streams through an Extended Kalman Filter, visualized live in RViz2
* Built a Python tool that monitors battery-enclosure temperature within 5% of a reference sensor across a full runtime cycle

**Skills:** Onshape · COMSOL Multiphysics · MATLAB · ROS2 · EKF · Onshape · Python
