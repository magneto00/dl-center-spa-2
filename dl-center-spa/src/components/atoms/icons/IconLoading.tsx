import { useTheme } from '@emotion/react';

export function IconLoading() {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      fill={theme.colors.primary.main}
    >
      <g transform="translate(80,50)">
        <g transform="rotate(0)">
          <circle cx="0" cy="0" r="5" fill="inherit" fillOpacity="1">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-1.0294117647058825s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1.1764705882352942s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fillOpacity"
              keyTimes="0;1"
              dur="1.1764705882352942s"
              repeatCount="indefinite"
              values="1;0"
              begin="-1.0294117647058825s"
            />
          </circle>
        </g>
      </g>
      <g transform="translate(71.21320343559643,71.21320343559643)">
        <g transform="rotate(45)">
          <circle cx="0" cy="0" r="5" fill="inherit" fillOpacity="0.875">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.8823529411764706s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1.1764705882352942s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fillOpacity"
              keyTimes="0;1"
              dur="1.1764705882352942s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.8823529411764706s"
            />
          </circle>
        </g>
      </g>
      <g transform="translate(50,80)">
        <g transform="rotate(90)">
          <circle cx="0" cy="0" r="5" fill="inherit" fillOpacity="0.75">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.7352941176470589s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1.1764705882352942s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fillOpacity"
              keyTimes="0;1"
              dur="1.1764705882352942s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.7352941176470589s"
            />
          </circle>
        </g>
      </g>
      <g transform="translate(28.786796564403577,71.21320343559643)">
        <g transform="rotate(135)">
          <circle cx="0" cy="0" r="5" fill="inherit" fillOpacity="0.625">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.5882352941176471s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1.1764705882352942s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fillOpacity"
              keyTimes="0;1"
              dur="1.1764705882352942s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.5882352941176471s"
            />
          </circle>
        </g>
      </g>
      <g transform="translate(20,50.00000000000001)">
        <g transform="rotate(180)">
          <circle cx="0" cy="0" r="5" fill="inherit" fillOpacity="0.5">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.4411764705882353s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1.1764705882352942s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fillOpacity"
              keyTimes="0;1"
              dur="1.1764705882352942s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.4411764705882353s"
            />
          </circle>
        </g>
      </g>
      <g transform="translate(28.78679656440357,28.786796564403577)">
        <g transform="rotate(225)">
          <circle cx="0" cy="0" r="5" fill="inherit" fillOpacity="0.375">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.29411764705882354s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1.1764705882352942s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fillOpacity"
              keyTimes="0;1"
              dur="1.1764705882352942s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.29411764705882354s"
            />
          </circle>
        </g>
      </g>
      <g transform="translate(49.99999999999999,20)">
        <g transform="rotate(270)">
          <circle cx="0" cy="0" r="5" fill="inherit" fillOpacity="0.25">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.14705882352941177s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1.1764705882352942s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fillOpacity"
              keyTimes="0;1"
              dur="1.1764705882352942s"
              repeatCount="indefinite"
              values="1;0"
              begin="-0.14705882352941177s"
            />
          </circle>
        </g>
      </g>
      <g transform="translate(71.21320343559643,28.78679656440357)">
        <g transform="rotate(315)">
          <circle cx="0" cy="0" r="5" fill="inherit" fillOpacity="0.125">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="0s"
              values="1.5 1.5;1 1"
              keyTimes="0;1"
              dur="1.1764705882352942s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fillOpacity"
              keyTimes="0;1"
              dur="1.1764705882352942s"
              repeatCount="indefinite"
              values="1;0"
              begin="0s"
            />
          </circle>
        </g>
      </g>
    </svg>
  );
}
