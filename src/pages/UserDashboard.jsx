import styles from "./UserDashboard.module.css";

const UserDashboard = () => {
  return (
    <div className={styles.userDashboard}>
      <img className={styles.userDashboardChild} alt="" src="/line-6.svg" />
      <div className={styles.userDashboardItem} />
      <div className={styles.userDashboardInner} />
      <div className={styles.lineDiv} />
      <div className={styles.twitter}>
        <p className={styles.twitter1}>Twitter</p>
      </div>
      <div className={styles.instagram}>Instagram</div>
      <div className={styles.linkedin}>
        <p className={styles.linkedin1}>Linkedin</p>
        <p className={styles.blankLine}>&nbsp;</p>
      </div>
      <div className={styles.facebook}>Facebook</div>
      <div className={styles.frameDiv}>
        <div className={styles.navigationParent}>
          <div className={styles.navigation}>
            <div className={styles.home}>Home</div>
            <div className={styles.links}>
              <div className={styles.aboutUs}>About Us</div>
            </div>
            <div className={styles.links1}>
              <div className={styles.blogs}>Blogs</div>
            </div>
            <div className={styles.links2}>
              <b className={styles.contact}>Contact</b>
            </div>
            <div className={styles.faqs}>FAQs</div>
          </div>
          <div className={styles.rightSidebar}>
            <div className={styles.belloutlineParent}>
              <img
                className={styles.belloutlineIcon}
                alt=""
                src="/belloutline.svg"
              />
              <div className={styles.fondParent}>
                <img className={styles.fondIcon} alt="" src="/fond.svg" />
                <b className={styles.counter}>1</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.topbar}>
        <div className={styles.backgroundPatternParent}>
          <img
            className={styles.backgroundPatternIcon}
            alt=""
            src="/background-pattern@2x.png"
          />
          <img className={styles.frameChild} alt="" />
          <img className={styles.frameItem} alt="" />
          <img className={styles.frameInner} alt="" />
          <img className={styles.lineIcon} alt="" />
          <img className={styles.frameChild1} alt="" />
          <img className={styles.frameChild2} alt="" />
        </div>
        <div className={styles.avatar}>
          <div className={styles.avatarChild} />
          <img className={styles.a1Icon} alt="" src="/a-1@2x.png" />
        </div>
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
        <img className={styles.cogoutlineIcon} alt="" src="/cogoutline.svg" />
        <img className={styles.topbarChild} alt="" src="/line-13.svg" />
        <img className={styles.icons} alt="" src="/icons.svg" />
        <img className={styles.icons1} alt="" src="/icons1.svg" />
        <img className={styles.icons2} alt="" src="/icons2.svg" />
        <div className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <img className={styles.bellIcon} alt="" src="/bell.svg" />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild3} />
          <img className={styles.bellIcon1} alt="" src="/bell1.svg" />
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.dashboardOverview}>Dashboard Overview</div>
        <div className={styles.userInfo}>
          <div className={styles.userCard}>
            <div className={styles.userContent}>
              <div className={styles.welcomeGraphicWrapper}>
                <div className={styles.welcomeGraphic}>
                  <div className={styles.welcomeGraphicChild} />
                  <div className={styles.greetingContainer}>
                    <div className={styles.nameContainerParent}>
                      <div className={styles.nameContainer}>
                        <div className={styles.name}>
                          <div className={styles.helloMananJainContainer}>
                            <span>Hello</span>
                            <span className={styles.mananJain}>
                              {" "}
                              Manan Jain,
                            </span>
                          </div>
                        </div>
                        <div className={styles.haveANice}>
                          Have a nice day and don’t forget to take care of your
                          health!
                        </div>
                      </div>
                      <div className={styles.learnMoreButton}>
                        <div className={styles.learnMoreParent}>
                          <div className={styles.learnMore}>Learn More</div>
                          <div className={styles.downArrowIconWrapper}>
                            <img
                              className={styles.downArrowIcon}
                              alt=""
                              src="/down-arrow-icon.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.homeImageIcon}
                    alt=""
                    src="/home-image@2x.png"
                  />
                </div>
              </div>
              <div className={styles.mediumUser}>
                <div className={styles.mananJain1}>Manan Jain</div>
                <div className={styles.userDetails}>
                  <div className={styles.locationDetails}>
                    <div className={styles.location}>
                      <div className={styles.cityParent}>
                        <div className={styles.city}>
                          <div className={styles.yearsOldLondon}>
                            20 years old
                          </div>
                          <div className={styles.locationDivider}>
                            <img
                              className={styles.lineIcon1}
                              alt=""
                              src="/line.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.locationIconContainer}>
                          <img
                            className={styles.locationIcon}
                            alt=""
                            src="/location-icon.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.bloodParent}>
                      <div className={styles.blood}>
                        <div className={styles.bloodGroup}>
                          <div className={styles.blood1}>Blood</div>
                          <div className={styles.bloodLetter}>
                            <div className={styles.b}>B-</div>
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.lineIcon2}
                        alt=""
                        src="/line1.svg"
                      />
                      <div className={styles.heightDetails}>
                        <div className={styles.height}>
                          <div className={styles.heightWrapper}>
                            <div className={styles.height1}>Height</div>
                          </div>
                          <div className={styles.cm}>170cm</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.education}>
                    <div className={styles.bitsGoa}>BITS Goa</div>
                    <div className={styles.collegeDetails}>
                      <div className={styles.collegeDivider}>
                        <img
                          className={styles.lineIcon3}
                          alt=""
                          src="/line1.svg"
                        />
                        <div className={styles.weightDetails}>
                          <div className={styles.weight}>
                            <div className={styles.weight1}>Weight</div>
                            <div className={styles.weightUnit}>
                              <div className={styles.kg}>70kg</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img className={styles.a1Icon1} alt="" src="/a-11@2x.png" />
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.data}>
                <div className={styles.charts}>
                  <div className={styles.chartContainer}>
                    <div className={styles.chartArea}>
                      <div className={styles.bg}>
                        <div className={styles.color} />
                        <div className={styles.activityChart}>
                          <div className={styles.chartTitle}>
                            <div className={styles.fitnessActivity}>
                              Fitness Activity
                            </div>
                          </div>
                          <div className={styles.chartContent}>
                            <div className={styles.chart}>
                              <div className={styles.cryptoChart}>
                                <div className={styles.group23Copy4}>
                                  <div className={styles.chartArea1} />
                                  <div className={styles.ethLabelContainer}>
                                    <div className={styles.ethLabel}>
                                      <div className={styles.oval6} />
                                    </div>
                                    <div className={styles.btc}>Water</div>
                                  </div>
                                </div>
                                <div className={styles.group23Copy2}>
                                  <div className={styles.bars} />
                                  <div className={styles.cryptoValues}>
                                    <div className={styles.oval61} />
                                  </div>
                                  <div className={styles.eth}>Steps</div>
                                </div>
                                <div className={styles.group23Copy5}>
                                  <div className={styles.rectangleContainer}>
                                    <div className={styles.frameChild4} />
                                    <div className={styles.oval62} />
                                  </div>
                                  <div className={styles.ltcWrapper}>
                                    <div className={styles.ltc}>Calories</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.activityChart1}>
                              <div className={styles.group8CopyWrapper}>
                                <div className={styles.group8Copy}>
                                  <div className={styles.rectangleCopy} />
                                  <div className={styles.group8CopyInner}>
                                    <img
                                      className={styles.groupIcon}
                                      alt=""
                                      src="/group-22@2x.png"
                                    />
                                  </div>
                                  <div className={styles.month}>This month</div>
                                  <div className={styles.arrowCopyWrapper}>
                                    <img
                                      className={styles.arrowCopyIcon}
                                      alt=""
                                      src="/arrow-copy.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                              <img
                                className={styles.iconsMoreHorizontal}
                                alt=""
                                src="/icons--more--horizontal@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.chartElements}>
                          <div className={styles.chartValues}>50</div>
                          <div className={styles.elementsLineGorizontalWrapper}>
                            <img
                              className={styles.elementsLineGorizontal}
                              alt=""
                              src="/elements--line--gorizontal.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.chartElements1}>
                          <div className={styles.div}>40</div>
                          <img
                            className={styles.elementsLineGorizontal1}
                            alt=""
                            src="/elements--line--gorizontal.svg"
                          />
                        </div>
                        <img
                          className={styles.elementsLineGorizontal2}
                          alt=""
                        />
                        <div className={styles.progressContainer}>
                          <div className={styles.progressPlaceholder}>30</div>
                          <div className={styles.progressElements}>
                            <img
                              className={styles.elementsLineGorizontal3}
                              alt=""
                              src="/elements--line--gorizontal.svg"
                            />
                            <img
                              className={styles.progressElementsChild}
                              alt=""
                              src="/group-3.svg"
                            />
                          </div>
                        </div>
                        <img
                          className={styles.elementsLineGorizontal4}
                          alt=""
                        />
                        <div className={styles.chartElements2}>
                          <div className={styles.div1}>20</div>
                          <div
                            className={styles.elementsLineGorizontalContainer}
                          >
                            <img
                              className={styles.elementsLineGorizontal5}
                              alt=""
                              src="/elements--line--gorizontal.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.chartElements3}>
                          <div className={styles.div2}>10</div>
                          <div className={styles.elementsLineGorizontalFrame}>
                            <img
                              className={styles.elementsLineGorizontal6}
                              alt=""
                              src="/elements--line--gorizontal.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.performanceContainer}>
                          <div className={styles.performanceItems}>
                            <div className={styles.performanceItem}>
                              <img
                                className={styles.elementsLineGorizontal7}
                                alt=""
                                src="/elements--line--gorizontal.svg"
                              />
                            </div>
                            <div className={styles.performanceScale}>
                              <div className={styles.scaleValues}>Jan</div>
                              <div className={styles.scaleValues1}>Feb</div>
                              <div className={styles.scaleValues2}>Mar</div>
                              <div className={styles.scaleValues3}>Apr</div>
                              <div className={styles.scaleValues4}>May</div>
                              <div className={styles.scaleValues5}>Jun</div>
                              <div className={styles.scaleValues6}>Jul</div>
                              <div className={styles.scaleValues7}>Aug</div>
                              <div className={styles.scaleValues8}>Sep</div>
                              <div className={styles.scaleValues9}>Oct</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutSummary}>
                        <div className={styles.workoutDetails}>
                          <div className={styles.groupDiv}>
                            <div className={styles.rectangle} />
                            <div className={styles.excellent}>Reminders</div>
                            <div className={styles.muscleIconContainer}>
                              <div className={styles.muscleIconParent}>
                                <div className={styles.muscleIcon}>
                                  <div className={styles.iconBackground}>
                                    <div className={styles.iconArea}>
                                      <div className={styles.rectangle1} />
                                      <img
                                        className={styles.musculationIcon}
                                        alt=""
                                        src="/musculation-icon.svg"
                                      />
                                    </div>
                                  </div>
                                  <div className={styles.muscleDuration}>
                                    <div className={styles.min}>48min</div>
                                  </div>
                                  <div className={styles.stretching}>
                                    Stretching
                                  </div>
                                </div>
                                <div className={styles.mindTraining}>
                                  <div className={styles.mindIconContainer}>
                                    <div className={styles.rectangleParent1}>
                                      <div className={styles.rectangle2} />
                                      <img
                                        className={styles.mindIcon}
                                        alt=""
                                        src="/mind-icon@2x.png"
                                      />
                                    </div>
                                  </div>
                                  <div className={styles.mindDuration}>
                                    <div className={styles.min1}>32min</div>
                                  </div>
                                  <div className={styles.mindTraining1}>
                                    Mind training
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.rectangleParent2}>
                            <div className={styles.rectangle3} />
                            <div className={styles.excellent1}>Reports</div>
                            <div className={styles.weightIcon}>
                              <img
                                className={styles.weightIconChild}
                                alt=""
                                src="/group-1000001800@2x.png"
                              />
                              <div className={styles.weightLabelContainer}>
                                <div className={styles.weightLabel}>
                                  <div className={styles.weightLoss}>
                                    Weight loss
                                  </div>
                                  <div className={styles.weightChange}>
                                    <div className={styles.decrease}>
                                      80% decrease
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.healthProgress}>
                              <img
                                className={styles.healthProgressChild}
                                alt=""
                                src="/group-1000001801@2x.png"
                              />
                              <div className={styles.healthLabelContainer}>
                                <div className={styles.healthLabel}>
                                  <div className={styles.generalHealth}>
                                    General health
                                  </div>
                                  <div className={styles.healthChange}>
                                    <div className={styles.increase}>
                                      78% Increase
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.activityData}>
                      <div className={styles.dataMetrics}>
                        <div className={styles.rectangleParent3}>
                          <div className={styles.frameChild5} />
                          <img
                            className={styles.frameChild6}
                            alt=""
                            src="/group-1000001793.svg"
                          />
                          <div className={styles.metricLabels}>
                            <div className={styles.waterMetric}>
                              <span className={styles.span}>202</span>
                              <span className={styles.span1}>/3000</span>
                            </div>
                            <div className={styles.stepsTaken}>Steps taken</div>
                          </div>
                        </div>
                        <div className={styles.rectangleParent4}>
                          <div className={styles.frameChild7} />
                          <img
                            className={styles.frameChild8}
                            alt=""
                            src="/group-1000001791.svg"
                          />
                          <div className={styles.kcalParent}>
                            <div className={styles.kcal}>
                              <span className={styles.span2}>{`408 `}</span>
                              <span className={styles.kcal1}>kcal</span>
                            </div>
                            <div className={styles.caloriesBurned}>
                              Calories burned
                            </div>
                          </div>
                        </div>
                        <div className={styles.rectangleParent5}>
                          <div className={styles.frameChild9} />
                          <img
                            className={styles.frameChild10}
                            alt=""
                            src="/group-1000001795.svg"
                          />
                          <div className={styles.frameParent}>
                            <div className={styles.litresWrapper}>
                              <div className={styles.litres}>
                                <span className={styles.span3}>87</span>
                                <span
                                  className={styles.litres1}
                                >{` litres `}</span>
                              </div>
                            </div>
                            <div className={styles.waterTaken}>
                              {" "}
                              Water taken
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.calendar}>
                  <div className={styles.datePicker}>
                    <div className={styles.monthContainer}>
                      <div className={styles.monthPicker}>
                        <div className={styles.march}>March</div>
                        <div className={styles.monthDropdown}>
                          <img
                            className={styles.rectangleIcon}
                            alt=""
                            src="/rectangle.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.reminder}>
                        <div className={styles.reminderIcon}>
                          <img
                            className={styles.bellIcon2}
                            alt=""
                            src="/bell-icon.svg"
                          />
                        </div>
                        <div className={styles.addReminder}>Add reminder</div>
                      </div>
                    </div>
                    <div className={styles.weekView}>
                      <div className={styles.weekContainer}>
                        <div className={styles.weekDays}>
                          <div className={styles.monParent}>
                            <div className={styles.mon}>Mon</div>
                            <div className={styles.tues}>Tues</div>
                          </div>
                          <div className={styles.placeholderOne}>
                            <div className={styles.emptyCellOne}>
                              <div className={styles.hiddenElements}>9</div>
                              <div className={styles.hiddenElements1}>10</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.wednesdayContainer}>
                        <div className={styles.wednesdayLabel}>
                          <div className={styles.rectangle4} />
                          <div className={styles.wed}>Wed</div>
                          <div className={styles.wednesdayMarker}>
                            <div className={styles.markerDetails}>
                              <div className={styles.markerPlaceholder}>11</div>
                              <div className={styles.oval} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.thursdayFridayWrapper}>
                          <div className={styles.thursdayFriday}>
                            <div className={styles.thursdayFridayLabel}>
                              <div className={styles.thu}>Thu</div>
                              <div className={styles.fri}>Fri</div>
                            </div>
                            <div className={styles.friday}>
                              <div className={styles.eventPlaceholder}>
                                <div className={styles.placeholder}>12</div>
                                <div className={styles.eventPlaceholder1}>
                                  <div className={styles.placeholder1}>13</div>
                                  <div className={styles.oval1} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.weekend}>
                          <div className={styles.weekendDays}>
                            <div className={styles.weekendLabels}>
                              <div className={styles.sat}>Sat</div>
                              <div className={styles.eventPlaceholders}>
                                <div className={styles.placeholder2}>14</div>
                              </div>
                            </div>
                            <div className={styles.weekendLabels1}>
                              <div className={styles.sun}>Sun</div>
                              <div className={styles.wrapper}>
                                <div className={styles.div3}>15</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.mondayEvent}>
                          <div className={styles.mondayEventDetails}>
                            <div className={styles.mon1}>Mon</div>
                            <div className={styles.placeholder3}>
                              <div className={styles.placeholder4}>16</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.eventList}>
                    <div className={styles.eventContainer}>
                      <div className={styles.eventItem}>
                        <div className={styles.eventTitle}>Upcoming</div>
                      </div>
                      <div className={styles.appointment}>
                        <div className={styles.appointmentDetails}>
                          <div
                            className={styles.healthAppointment}
                          >{`Health appointment  `}</div>
                        </div>
                        <div className={styles.appointmentDetails1}>
                          <div className={styles.mrDokTomm}>Mr Dok tomm</div>
                        </div>
                        <div className={styles.am1130am}>09:20AM - 11:30AM</div>
                      </div>
                      <div className={styles.meeting}>
                        <div className={styles.meetingDetails}>
                          <div className={styles.meetingWithTok}>
                            Meeting with Tok Dalang
                          </div>
                          <div className={styles.meetingTime}>
                            <div className={styles.am}>07:00AM</div>
                            <div className={styles.dueSoon}>Due Soon</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.workoutSession}>
                    <div className={styles.sessionDetails}>
                      <div className={styles.sessionTitle}>
                        <div className={styles.postWorkoutSession}>
                          Post workout sessions
                        </div>
                      </div>
                      <div className={styles.meditation}>
                        <div className={styles.mask}>
                          <div className={styles.rectangle5} />
                          <div className={styles.sessionDetails1}>
                            <div className={styles.meditation1}>Meditation</div>
                            <div className={styles.sessionInfo}>
                              <div className={styles.pm600pm}>
                                5:00PM - 6:00PM
                              </div>
                              <div className={styles.coachTim}>
                                Coach : Tim Bjorvick
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
