---
title: "Autonomous Surface Vessel — Team Kanaloa"
excerpt: "A 400-lb self-righting unmanned surface vessel built for littoral zone surveying."
collection: portfolio
role: "Lead Systems Engineer · Team Kanaloa"
dates: "Aug 2025 – May 2026"
tech: ["ROS2", "C++", "PID control", "FEA", "Gazebo", "Sensor Fusion"]
gallery:
  - file: kanaloa-usv.jpg
    alt: "Team Kanaloa autonomous surface vessel on the water at sand island"
  - file: kanaloa-poster.jpg
    alt: "Team Kanaloa project poster"
    caption: "Project poster: RIP-C, an unmanned surface vessel for littoral zone surveying"
  - file: kanaloa-enclosure.jpg
    alt: "Sealed sensor enclosure with antenna and cable gland"
    caption: "Watertight fused-sensor localization enclosure"
  - file: kanaloa-enclosure-open.jpg
    alt: "Open enclosure showing the sensor board"
    caption: "Inside the enclosure: Teensy 4.1, Zed F9P GPS receiver, and BNO055 IMU on a custom PCB"
  - file: kanaloa-electrical-power.jpg
    alt: "Electronics box power section with main bus bars, 200 A T-fuse, batteries, and PLA mounting boards"
    caption: "Electrical assembly: main bus, 200 A T-fuse, batteries, and PLA mounting boards"
  - file: kanaloa-electrical-integration.jpg
    alt: "Electronics box with ESCs, Teensy 4.1, cooling fan, breakers, Ubiquiti Prism, POE injector, router, NUC, and buck converters"
    caption: "Electrical integration: ESCs, Teensy 4.1, breakers, Ubiquiti Prism, POE injector, GL.iNet router, ASUS NUC, and buck converters"
  - file: kanaloa-sector-antenna.jpg
    alt: "Sector antenna mounted on a black tripod"
    caption: "Sector antenna for field testing, configured the Ubiquiti Prism in our electronics box for land-to-boat communications"
  - file: kanaloa-pcb.png
    alt: "KiCad layout of the custom localization PCB"
    caption: "Custom PCB layout in KiCad"
  - file: kanaloa-pcb-alt.png
    alt: "Alternate view of the custom localization PCB"
    caption: "PCB layout, alternate view"
  - file: kanaloa-ros-control.png
    alt: "ROS 2 motorcontrol node graph"
    caption: "ROS 2 control graph: /cmd_vel to the port and starboard motor controllers"
  - file: kanaloa-ros-localization.png
    alt: "ROS 2 localization node graph"
    caption: "ROS 2 localization graph: GPS and IMU fused through local and global EKFs"
  - file: kanaloa-gps-path.png
    alt: "Field test path on a campus map"
    caption: "Field test path from start to end on the campus map"
  - file: kanaloa-sim-forward.png
    alt: "Gazebo simulation compared with the Fossen model for a forward maneuver"
    caption: "Gazebo simulation vs. Fossen hydrodynamic model: forward maneuver"
  - file: kanaloa-sim-turn.png
    alt: "Gazebo simulation compared with the Fossen model for a right turn"
    caption: "Gazebo simulation vs. Fossen hydrodynamic model: right turn while moving forward"
date: 2026-05-01
header:
  teaser: portfolio/kanaloa-usv.jpg
---

{% include gallery.html %}

**Role:** Lead Systems Engineer · Team Kanaloa &nbsp;|&nbsp; **When:** Aug 2025 – May 2026

Designed and built a 400-lb unmanned surface vessel with a self-righting hull, then wrote the software that let it navigate on its own for the RobotX competition.

* Ran comparative FEA across hull composite layups (XPS foam core, 10oz fiberglass, marine-grade epoxy) to hit a factor of safety of 5 in 4-foot wave conditions
* Integrated an aluminum plate into the bottom of the hull for passive cooling of onboard electronics
* Modeled the vessel in URDF/XML and validated the C++ PID control and autonomy stack in Gazebo before on-water testing
* Implemented an Extended Kalman Filter that fuses GPS, IMU, and wheel-encoder measurements with RTCM correction for centimeter-level real-time localization
* Wrote low-level ROS2 drivers and hardware interfaces (I2C, UART, SPI, USB) to bring the vessel's sensors and electronics online

**Skills:** FEA · ROS2 · C++ · EKF · PID control · Sensor Fusion · Gazebo
