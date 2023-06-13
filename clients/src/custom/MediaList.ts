
// 사용가능한 audio, vedio 목록 가져오기.
export async function userPermissionsStream() {
  try {
    await navigator.mediaDevices.getUserMedia({audio: true, video: true});
    const stream = await navigator.mediaDevices.enumerateDevices();
    const audioList = stream.filter((device) => device.kind === 'audioinput').map((device, index) => ({
      idx: `audio-${index}`,
      value: device.deviceId,
      label: device.label
    }));
    const videoList = stream.filter((device) => device.kind === 'videoinput').map((device, index) => ({
      idx: `video-${index}`,
      value: device.deviceId,
      label: device.label
    }));
    return [audioList, videoList];
  } catch(err: any) {
    if (err.name === "NotAllowedError") {
      console.error(err);
    }
    return [[],[]];
  }
};

interface ChangeStremProps {
  audios?: string;
  videos?: string;
}

export async function changeStream(props: ChangeStremProps) {
  try {
    if (props.audios && props.videos) {
      await navigator.mediaDevices.getUserMedia({
        audio: {deviceId: props.audios},
        video: {deviceId: props.videos}
      });
    } else if (props.audios) {
      await navigator.mediaDevices.getUserMedia({
        audio: {deviceId: props.audios}
      });
    }
  } catch(e: any) {
    console.log(e);
  }
}