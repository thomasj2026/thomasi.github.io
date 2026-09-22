---
title: "Autonomous Surface Vessel — Team Kanaloa"
excerpt: "A 400-lb self-righting unmanned surface vessel built for the RobotX competition.<br/><img src='/images/500x300.png'>"
collection: portfolio
date: 2026-05-01
---

{% comment %}
  Replace the placeholder image above and below with a real photo, e.g.:
  1. Drop a photo in images/portfolio/kanaloa-usv.jpg  (suggested: 1200x800, landscape)
  2. Change '/images/500x300.png' (in the excerpt above AND the <img> tag below) to
     '/images/portfolio/kanaloa-usv.jpg'
{% endcomment %}
<img src='/images/500x300.png' alt="Team Kanaloa autonomous surface vessel — add a real photo here">

**Role:** Lead Software Engineer · Team Kanaloa &nbsp;|&nbsp; **When:** Aug 2025 – May 2026

Designed and built a 400-lb unmanned surface vessel with a self-righting hull, then wrote the software that let it navigate on its own for the RobotX competition.

* Ran comparative FEA across hull composite layups (XPS foam core, 10oz fiberglass, marine-grade epoxy) to hit a factor of safety of 5 in 4-foot wave conditions
* Integrated an aluminum plate into the bottom of the hull for passive cooling of onboard electronics
* Modeled the vessel in URDF/XML and validated the C++ PID control and autonomy stack in Gazebo before on-water testing
* Implemented an Extended Kalman Filter that fuses GPS, IMU, and wheel-encoder measurements with RTCM correction for centimeter-level real-time localization
* Wrote low-level ROS2 drivers and hardware interfaces (I2C, UART, SPI, USB) to bring the vessel's sensors and electronics online

**Tech:** Hull design · FEA · ROS2 · C++ · EKF · PID control · GPS/IMU sensor fusion
