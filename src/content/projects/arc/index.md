---
title: ARC
tagline: A DIY radio-control system for a model aircraft.
description: A home-built RC airplane control system — a Python/pygame ground station on a Steam Deck reads a gamepad and sends commands over USB-serial to an Arduino Nano transmitter, which relays them over nRF24 (2.4 GHz) to a receiver running a PID stabilisation loop that drives the servos and ESC, with ACK telemetry back.
status: active
pubDate: 2026-08-01
repo: https://github.com/kliuchnikovv/ARC
tech: [Arduino, C++, Python, nRF24]
tags: [arduino, embedded]
featured: false
order: 7
---

A home-built radio-control system for a model airplane: a Steam Deck ground
station, an nRF24 radio link, and an on-board PID stabilisation loop.
