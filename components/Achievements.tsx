import { Key } from 'react';
import { Card, CardActionArea } from '@mui/material';
import Link from 'next/link';

type TBadges = {
  id: Key;
  name: string;
  earned_date: string;
  courses: [{
    title: string;
    url: string;
  }];
}

const Achievements = async () => {
  // fetch treehouse data
  const response = await fetch('https://teamtreehouse.com/profiles/aimeelaws.json');
  let { badges } = await response.json();
  badges = badges.slice(Math.max(badges.length - 6, 1)).reverse();

  // format date DD/M/YYYY
  const formatDate = (dateStr: string) => {
    const timestamp = Date.parse(dateStr);
    const date = new Date(timestamp);

    return date.getDate() + '/' + (date.getUTCMonth() + 1) + '/' + date.getUTCFullYear();
  }

  return (
    <div
      className="
        grid
        sm:grid-cols-2 lg:grid-cols-3
        grid-rows-6 sm:grid-rows-3 lg:grid-rows-2
        gap-3
      "
    >
      {badges.map(({ id, name, earned_date, courses }: TBadges) => (
        <Card key={id} className="w-full rounded-md bg-primary-50 overflow-hidden">
          <CardActionArea className="h-full">
            <Link href={courses[0].url} className="flex items-stretch h-full no-underline">
              <div className="p-3 text-primary-600">
                <h3 className="m-0 text-base md:text-lg 2xl:text-xl font-bold">
                  {name}
                </h3>
                <p className="m-0 text-xs md:text-sm">{courses[0].title}</p>
              </div>
              <div className="skew flex justify-end items-end ml-auto p-3 w-1/2 text-primary-50 bg-primary-600">
                <p className="m-0 pl-5">{formatDate(earned_date)}</p>
              </div>
            </Link>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default Achievements;