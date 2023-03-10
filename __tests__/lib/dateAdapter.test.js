import findStartAndEndMonth, {
  currentTimeAsISO,
  durationAdapter,
} from '../../lib/dateAdapter'

describe('dateAdapter', () => {
  it('converts video one hour to 01:00:00', () => {
    const videoData = {
      durationHours: 1,
      durationMinutes: 0,
      durationSeconds: 0,
    }
    const res = durationAdapter(videoData)
    expect(res).toBe('01:00:00')
  })
  it('converts video one hour to 10:00', () => {
    const videoData = {
      durationHours: 0,
      durationMinutes: 10,
      durationSeconds: 0,
    }
    const res = durationAdapter(videoData)
    expect(res).toBe('10:00')
  })
  it('converts video data minutes and seconds to 23:12', () => {
    const videoData = {
      durationHours: 0,
      durationMinutes: 23,
      durationSeconds: 12,
    }
    const res = durationAdapter(videoData)
    expect(res).toBe('23:12')
  })
  it('converts video data minutes and seconds to 23:02', () => {
    const videoData = {
      durationHours: 0,
      durationMinutes: 23,
      durationSeconds: 2,
    }
    const res = durationAdapter(videoData)
    expect(res).toBe('23:02')
  })
  it('converts video data minutes and seconds to 01:23:02', () => {
    const videoData = {
      durationHours: 1,
      durationMinutes: 23,
      durationSeconds: 2,
    }
    const res = durationAdapter(videoData)
    expect(res).toBe('01:23:02')
  })
  it('converts video data minutes and seconds to 03:02', () => {
    const videoData = {
      durationHours: 0,
      durationMinutes: 3,
      durationSeconds: 2,
    }
    const res = durationAdapter(videoData)
    expect(res).toBe('03:02')
  })
  it('converts video data seconds to 00:12', () => {
    const videoData = {
      durationHours: 0,
      durationMinutes: 0,
      durationSeconds: 12,
    }
    const res = durationAdapter(videoData)
    expect(res).toBe('00:12')
  })
  it('converts video with no time to 00:00', () => {
    const videoData = {
      durationHours: 0,
      durationMinutes: 0,
      durationSeconds: 0,
    }
    const res = durationAdapter(videoData)
    expect(res).toBe('00:00')
  })
  it('converts video with excess seconds to 00:59', () => {
    const videoData = {
      durationHours: 0,
      durationMinutes: 0,
      durationSeconds: 60,
    }
    const res = durationAdapter(videoData)
    expect(res).toBe('00:59')
  })
  it('select month start and end', () => {
    const {start, end} = findStartAndEndMonth()
    const year = new Date().getFullYear()
    expect(start.endsWith("-01")).toBe(true)
    expect(start.startsWith(year.toString())).toBe(true)
    expect(end.startsWith(year.toString())).toBe(true)
  })
  it('generate current date time ISO', () => {
    const isoTimestamp = currentTimeAsISO()
    expect(isoTimestamp).toBeTruthy()
    expect(isoTimestamp.includes('T')).toBe(true)
    expect(isoTimestamp.endsWith('Z')).toBe(true)
    expect(isoTimestamp.match(/^\d{4}-\d{2}-\d{2}T.+/).length === 1).toBe(true)
  })
})