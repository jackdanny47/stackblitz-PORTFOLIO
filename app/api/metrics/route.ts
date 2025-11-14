import { NextResponse } from 'next/server';

export async function GET(){
  const data = {
    history:[
      {ts:'10:00',value:10000},
      {ts:'10:05',value:10250},
      {ts:'10:10',value:10100}
    ]
  };
  return NextResponse.json(data);
}
