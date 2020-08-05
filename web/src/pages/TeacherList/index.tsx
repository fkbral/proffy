import React, { useState, FormEvent } from 'react'

import PageHeader from '../../components/PageHeader';

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

import './styles.css';

const TeacherList:React.FC = () => {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [weekday, setWeekday] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e:FormEvent) {
    e.preventDefault();
  
    const response = await api.get('classes', {
      params: {
        subject,
        week_day:weekday,
        time
      }
    });

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available proffys.">
        <form id="search-teachers">
        <Select 
            name="subject"
            label="Subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            options={[
              { value: 'Arts', label: 'Arts' },
              { value: 'Biology', label: 'Biology' },
              { value: 'Chemistry', label: 'Chemistry' },
              { value: 'English', label: 'English' },
              { value: 'Geography', label: 'Geography' },
              { value: 'History', label: 'History' },
              { value: 'Literature', label: 'Literature' },
              { value: 'Science', label: 'Science' },
              { value: 'Math', label: 'Math' },
              { value: 'Physical Education', label: 'Physical Education' },
              { value: 'Physics', label: 'Physics' },
            ]}
          />
          <Select 
            name="week_day"
            label="Week day"
            value={weekday}
            onChange={e => setWeekday(e.target.value)}
            options={[
              { value: '0', label: 'Sunday' },
              { value: '1', label: 'Monday' },
              { value: '2', label: 'Tuesday' },
              { value: '3', label: 'Wednesday' },
              { value: '4', label: 'Thursday' },
              { value: '5', label: 'Friday' },
              { value: '6', label: 'Saturday' },
            ]}
          />
          <Input
            name="time"
            label="Time"
            type="time"
            value={time}
            onChange={e => setTime(e.target.value)}
          />

          <button type="submit" onClick={searchTeachers}>
            Search
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher : Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </div>
  )
}

export default TeacherList;