export const Required = 'Vui lòng nhập thông tin này'
export const MgsFormat = 'Vui lòng nhập đúng định dạng'
export const MgsFormatDateofBirth = 'Vui lòng nhập đúng định dạng ví dụ : 20/03/2023'
export const MgsFormatGender = 'Vui lòng chọn giới tính của bạn'
export const MgsFormatLitmitCharacters = 'Vui lòng không nhập vượt quá 255 ký tự'
export const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g

export const emailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const MaxString = (mgs: string = 'Tên trường', max: string = '255') => `${mgs  } không được vượt quá ${  max  } kí tự`

export const listGrade = [
  {
    name: 'Khối 1',
    value: '1',
  },
  {
    name: 'Khối 2',
    value: '2',
  },
  {
    name: 'Khối 3',
    value: '3',
  },
  {
    name: 'Khối 4',
    value: '4',
  },
  {
    name: 'Khối 5',
    value: '5',
  },
  {
    name: 'Khối 6',
    value: '6',
  },
  {
    name: 'Khối 7',
    value: '7',
  },

  {
    name: 'Khối 8',
    value: '8',
  },
  {
    name: 'Khối 9',
    value: '9',
  },
  {
    name: 'Khối 10',
    value: '10',
  },
  {
    name: 'Khối 11',
    value: '11',
  },
  {
    name: 'Khối 12',
    value: '12',
  },
]
export interface ILimitOption {
  value: number
  id: string
}
export const optionLimitPage: ILimitOption[] = [
  {
    value: 10,
    id: '10',
  },
  {
    value: 50,
    id: '50',
  },
  {
    value: 100,
    id: '100',
  },
]

export const optionLimitGrid: ILimitOption[] = [
  {
    value: 12,
    id: '12',
  },
  {
    value: 60,
    id: '60',
  },
  {
    value: 120,
    id: '120',
  },
]

export const headerListTeachService = [
  {
    title: 'tên gói',
  },
  {
    title: 'giá gốc (VNĐ)',
  },
  {
    title: 'giá bán (vNĐ)',
  },
  {
    title: 'Sl đề thi',
  },
  {
    title: 'Số lượng học sinh',
  },
  {
    title: 'DUNG LƯỢNG (GB)',
  },
  {
    title: 'thời hạn (tháng)',
  },
  {
    title: 'trạng thái',
  },
  {
    title: 'hành động',
  },
]

export const headerListSchoolService = [
  {
    title: 'tên gói',
  },
  {
    title: 'giá gốc (VNĐ)',
  },
  {
    title: 'giá bán (VNĐ)',
  },
  {
    title: 'Sl đề thi',
  },
  {
    title: 'Số lượng admin trường',
  },
  {
    title: 'sl giáo viên',
  },
  {
    title: 'Số lượng học sinh',
  },
  {
    title: 'dung lượng (GB)',
  },
  {
    title: 'thời hạn (tháng)',
  },
  {
    title: 'trạng thái',
  },
  {
    title: 'hành động',
  },
]

export const headerListStudentService = [
  {
    title: 'tên gói',
  },
  {
    title: 'giá gốc (VNĐ)',
  },
  {
    title: 'giá bán (VNĐ)',
  },
  {
    title: 'Sl đề thi',
  },
  {
    title: 'thời hạn (tháng)',
  },
  {
    title: 'trạng thái',
  },
  {
    title: 'hành động',
  },
]

export enum VNPayStatus {
  success = '00',
}
