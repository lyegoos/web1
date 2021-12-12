import requests
from bs4 import BeautifulSoup

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://movie.naver.com/movie/sdb/rank/rmovie.nhn?sel=pnt&date=20200303',headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

# 코딩 시작
movie = soup.select('#old_content > table > tbody > tr')

for movies in movie:
    num = movies.select_one('td:nth-child(1) > img')
    title = movies.select_one('td.title > div > a')
    point = movies.select_one('td.point')
    if num and title and point is not None:
        print(num['alt'], title['title'], point.text )
