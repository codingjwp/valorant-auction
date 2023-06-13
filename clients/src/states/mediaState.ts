import { atom } from "recoil"

interface MediaListprops {
  idx: string,
  value: string,
  label: string,
}

export const permissionState = atom<boolean>({
  key: "permissionsState",
  default: false
})

// audio 목록들 저장
export const audioListState = atom<MediaListprops[]>({
  key: "audioList",
  default: []
});

// vedio 목록들 저장
export const videoListState = atom<MediaListprops[]>({
  key: "videoList",
  default: []
});