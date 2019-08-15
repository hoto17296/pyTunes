import os
import subprocess
import json
import pandas as pd


def exec_jxa(filename, *args):
    filepath = os.path.join(os.path.dirname(__file__), 'jxa', filename)
    command = ['osascript', '-l', 'JavaScript', filepath, *args]
    return subprocess.check_output(command).decode()


def fetch_track_list():
    return pd.read_json(exec_jxa('getAllTracks.js')).set_index('id')


def play(df):
    exec_jxa('playTracks.js', json.dumps({'tracks': list(df.index)}))


__all__ = ['fetch_track_list', 'play']
