import React from "react";
import { VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor=" #510d49">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2019"
          iconStyle={{ background: "#510d49", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Model English School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
           Dombivli(E), Maharashtra
          </h4>
          <p> SSC</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: " #510d49", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            R.V. Nerurkar Jr. College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
           Dombivli(E), Maharashtra
          </h4>
          <p> HSC</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2025"
          iconStyle={{ background: " #510d49", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          
          <h3 className="vertical-timeline-element-title">
            B.E. INFORMATION TECHNOLOGY
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Chembur, Mumbai, Maharsahtra
          </h4>
          <p>Persuing B.E. in INFORMATION TECHNOLOGY studiyng at third year, sem 5</p>
          
        </VerticalTimelineElement>
        </VerticalTimeline>

        
    

    </div>
  );
}

export default Experience;
