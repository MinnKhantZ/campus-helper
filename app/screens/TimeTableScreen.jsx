import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const days = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const periods = ["1", "2", "3", "4", "5", "6"];
const periodTimes = [
  { start: "08:00", end: "08:50" },
  { start: "09:00", end: "09:50" },
  { start: "10:00", end: "10:50" },
  { start: "11:00", end: "11:50" },
  { start: "13:00", end: "13:50" },
  { start: "14:00", end: "14:50" },
];

const sampleData = {
  Monday: ["Math", "Physics", "English", "Free", "Biology", "Art"],
  Tuesday: ["History", "Chemistry", "Math", "CS", "Free", "PE"],
  Wednesday: ["English", "Free", "CS", "Math", "Art", "Biology"],
  Thursday: ["Math", "Free", "History", "Chemistry", "PE", "Free"],
  Friday: ["Physics", "Biology", "English", "Math", "CS", "Free"],
};

const getCurrentPeriodIndex = () => {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  for (let i = 0; i < periodTimes.length; i++) {
    const [startHour, startMin] = periodTimes[i].start.split(":").map(Number);
    const [endHour, endMin] = periodTimes[i].end.split(":").map(Number);

    const start = startHour * 60 + startMin;
    const end = endHour * 60 + endMin;

    if (currentTime >= start && currentTime <= end) return i;
  }

  return -1;
};

const TimeTableScreen = () => {
  const [currentDay, setCurrentDay] = useState("");
  const [currentPeriod, setCurrentPeriod] = useState(-1);

  useEffect(() => {
    const now = new Date();
    const dayIndex = now.getDay(); // 0 = Sunday
    const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    setCurrentDay(weekdayNames[dayIndex]);
    setCurrentPeriod(getCurrentPeriodIndex());
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Weekly Timetable</Text>
      <View style={styles.table}>
        {/* Header */}
        <View style={styles.row}>
          {days.map((day, index) => (
            <Text key={index} style={[styles.cell, styles.headerCell]}>
              {day}
            </Text>
          ))}
        </View>

        {/* Period Rows */}
        {periods.map((period, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            <Text style={[styles.cell, styles.periodCell]}>{period}</Text>
            {days.slice(1).map((day, colIndex) => {
              const isNow =
                currentDay === day && currentPeriod === rowIndex;
              return (
                <Text
                  key={colIndex}
                  style={[
                    styles.cell,
                    isNow && styles.highlightCell
                  ]}
                >
                  {sampleData[day][rowIndex]}
                </Text>
              );
            })}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  table: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 8,
    textAlign: "center",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#CCC",
    backgroundColor: "#FFF",
    fontSize: 16,
  },
  headerCell: {
    fontWeight: "600",
    backgroundColor: "#E0F7FA",
  },
  periodCell: {
    backgroundColor: "#E3F2FD",
    fontWeight: "600",
  },
  highlightCell: {
    backgroundColor: "#FFEB3B", // Highlight yellow
    fontWeight: "700",
    color: "#000",
  },
});

export default TimeTableScreen;
