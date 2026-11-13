import { useEffect, useRef } from 'react'
import DateRangePicker from 'flowbite-datepicker/DateRangePicker'

const DatePicker = ({ onDateChange }) => {
  const pickerRef = useRef(null)

  useEffect(() => {
    if (pickerRef.current) {
      const picker = new DateRangePicker(pickerRef.current, {
        minDate: new Date(),
        autohide: true,
      })

      const startInput = pickerRef.current.querySelector('input[name="start"]')
      const endInput = pickerRef.current.querySelector('input[name="end"]')

      const handleDateChange = () => {
        if (onDateChange) {
          onDateChange({
            checkIn: startInput ? startInput.value : '',
            checkOut: endInput ? endInput.value : ''
          })
        }
      }

      startInput?.addEventListener('changeDate', handleDateChange)
      endInput?.addEventListener('changeDate', handleDateChange)
      startInput?.addEventListener('change', handleDateChange)
      endInput?.addEventListener('change', handleDateChange)

      return () => {
        startInput?.removeEventListener('changeDate', handleDateChange)
        endInput?.removeEventListener('changeDate', handleDateChange)
        startInput?.removeEventListener('change', handleDateChange)
        endInput?.removeEventListener('change', handleDateChange)
        try {
          picker.destroy()
        } catch (e) {
          // ignore
        }
      }
    }
  }, [onDateChange])

  return (
    <div className=''>
      <div ref={pickerRef} className="flex items-center justify-center">
        <input
          name="start"
          type="text"
          required
          autoComplete="off"
          className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-amber-500 focus:border-amber-500"
          placeholder="Check-in"
        />
        <span className="mx-3 text-gray-500">to</span>
        <input
          name="end"
          type="text"
          required
          autoComplete="off"
          className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-amber-500 focus:border-amber-500"
          placeholder="Check-out"
        />
      </div>
    </div>
  )
}

export default DatePicker
