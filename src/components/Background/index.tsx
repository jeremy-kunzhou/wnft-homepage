import React, { useEffect } from "react";

export const LineBackground = () => {
  useEffect(() => {
    // @ts-ignore
    new SineWaves({
      el: document.getElementById("waves"),

      speed: 4,

      width: function () {
        return window.innerWidth;
      },

      height: function () {
        return window.innerHeight * 0.75;
      },

      ease: "SineInOut",

      wavesWidth: "120%",

      waves: [
        {
          timeModifier: 4,
          lineWidth: 1,
          amplitude: 1,
          wavelength: 0
        },
        {
          timeModifier: 4,
          lineWidth: 1,
          amplitude: -25,
          wavelength: 25
        },
        {
          timeModifier: 2,
          lineWidth: 1,
          amplitude: -10,
          wavelength: 30
        },
        {
          timeModifier: 1,
          lineWidth: 1,
          amplitude: -30,
          wavelength: 30
        },
        {
          timeModifier: 3,
          lineWidth: 1,
          amplitude: 40,
          wavelength: 40
        },
        {
          timeModifier: 0.5,
          lineWidth: 1,
          amplitude: -60,
          wavelength: 60
        },
        {
          timeModifier: 1.3,
          lineWidth: 1,
          amplitude: -40,
          wavelength: 100
        }
      ],

      // Called on window resize
      resizeEvent: function () {
        var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
        gradient.addColorStop(0, "rgba(210, 210, 210, 0.2)");
        gradient.addColorStop(0.5, "rgba(0, 0, 0, 0.5)");
        gradient.addColorStop(1, "rgba(210, 210, 210, 0.2)");

        var index = -1;
        var length = this.waves.length;
        while (++index < length) {
          this.waves[index].strokeStyle = gradient;
        }
      }
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "70%",
        position: "absolute",
        zIndex: 0
      }}
    >
      <canvas
        id={"waves"}
        style={{
          maxWidth: "none",
          height: '100%',
        }}
      />
    </div>
  );
};
