import styles from './PreLoader.module.css'

const PreLoader = () => {
  return (
    <div className={styles.preLoader}>
      <svg
        className={styles.logoSvg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 224.84 164.66"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Capa_1" data-name="Capa 1">
            <path
              id={styles.logo_right}
              className={styles.cls1}
              d="M224.84,159.25h-7.21c-11.81,0-23.62-.36-35.41.1-18.79.74-32.42-7.72-42.77-22.65l-1.93-2.82c-4.88,3.16-6.92,8.29-10,14.07V37.52l.65-.14c1,5.16,2,10.31,2.89,15.49,2.72,16.63,6,33.07,14.44,48,17.28,30.5,42.85,49.77,77.24,57.14.62.13,1.23.33,1.84.52C224.66,158.53,224.67,158.74,224.84,159.25Z"
            />
            <path
              id={styles.logo_left}
              className={styles.cls1}
              d="M0,163.91c8.91-1.62,17.79-3.38,26.73-4.85,45.69-7.53,81.89-40.73,92.81-85.24a19.57,19.57,0,0,1,2.09-6.07v5.52c0,12.45-.38,24.91.08,37.35.67,18.21-7.43,31.49-21.87,41.59l-4.18,2.9,13.71,9.55H.1Z"
            />
            <circle
              id={styles.logo_circle}
              className={styles.cls1}
              cx="128.2"
              cy="14.44"
              r="14.44"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default PreLoader;
