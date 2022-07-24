import React from 'react';
import { Text } from 'react-native';
import Calendar from 'react-native-calendars/src/calendar';
import { DateData } from 'react-native-calendars/src/types';
import { SafeAreaView } from 'react-native-safe-area-context';

interface AgendarDiaProps {
  diaSelecionado: string;
  definirDiaSelecionado: (dia: DateData) => void;
}

export function AgendarDia({ diaSelecionado, definirDiaSelecionado }: AgendarDiaProps) {
  return (
    <SafeAreaView>
      <Calendar
        markedDates={{ [diaSelecionado]: { selected: true, disableTouchEvent: true } }}
        // Initially visible month. Default = now
        initialDate={'2022-07-22'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2022-07-20'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2025-05-30'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={definirDiaSelecionado}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {
          console.log('selected day', day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'yyyy MM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {
          console.log('month changed', month);
        }}
        // Hide month navigation arrows. Default = false
        hideArrows={false}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={(direction) => <Text>asdf</Text>}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={false}
        // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={false}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={false}
        // Show week numbers to the left. Default = false
        showWeekNumbers={false}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={(addMonth) => addMonth()}
        // Disable left arrow. Default = false
        disableArrowLeft={false}
        // Disable right arrow. Default = false
        disableArrowRight={false}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        // Replace default month and year title with custom one. the function receive a date as parameter
        renderHeader={(date) => {
          <Text>Header</Text>;
        }}
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: 'blue',
          indicatorColor: 'blue',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
    </SafeAreaView>
  );
}
