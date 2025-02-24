import PropTypes from "prop-types";
import styles from "./02_vol4_event_info.module.css";

const eventDetails = {
  date: "2025. 8. 10 Sat.",
  openTime: "Open / 16:30",
  startTime: "Start / 17:00",
  ticketPrice: "￥2,000",
  venue: "スタジオノア 学芸大店 1Bスタジオ",
};

const EventInfo = ({ className = "" }) => {
  return (
    <section className={[styles.eventInfoContainer, className].join(" ")}>
      <div className={styles.eventMainInfo}>
        <div className={styles.eventInfoSubTitle}>
          <img
            className={styles.fukidashiImage}
            loading="lazy"
            alt=""
            src="./fukidashi.png"
          />
          <div className={styles.eventInfoText}>event info</div>
        </div>

        <div className={styles.eventInfoDateTicket}>
          <img className={styles.kurariCamvasImage} loading="lazy" alt="" src="./kurari_canvas.png" />
          <div className={styles.descriptionDateTicket}>
            <p className={styles.textLarge}>
              Date <br />
              &ensp;&ensp;{eventDetails.date}
            </p>
            <p className={styles.textSmall}>
            &ensp;&ensp;&ensp;&ensp;&ensp;{eventDetails.openTime} <br />
            &ensp;&ensp;&ensp;&ensp;&ensp;{eventDetails.startTime}
            </p>
            <p className={styles.textLarge}>
              Ticket
            </p>
            <p className={styles.textSmall}>
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;adv.&ensp;{eventDetails.ticketPrice}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.venueInfo}>
        <div className={styles.rect}>
          <h3 className={styles.textVenueTitle}>会場</h3>
          <div className={styles.textVenueDesctiption}>
            {eventDetails.venue}
          </div>
          <center>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.16949561025!2d139.67953169999998!3d35.6235478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f4daca577e81%3A0xfab37d6cc2b6d07e!2z44OO44Ki44K544K_44K444KqIOWtpuiKuOWkp-W6lw!5e0!3m2!1sja!2sjp!4v1740299533683!5m2!1sja!2sjp" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </center>
        </div>
        <img
          className={styles.redPinIcon}
          loading="lazy"
          alt=""
          src="./red-pin@2x.png"
        />
      </div>
    </section>
  );
};

EventInfo.propTypes = {
  className: PropTypes.string,
};

export default EventInfo;
