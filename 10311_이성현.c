#include <stdio.h>
#include <windows.h>
#define swap(a, b) {int temp; temp=a; a=b; b=temp;}

int arr[10], count = 0; // count : 배열을 입력할 때마다 증가시킴 
void Chose_print(int num); //번호를 입력받아 번호에 맞는 함수를 호출함 
void _Sort(void); // 배열 입력받는 함수 
void Bubble(void); // 버블 정렬 
void print(void); //시작 부분
void scr(void);  // 이스터 에그 

int main()
{
	int num;

	while(num != 3)
	{	
		print();
		scanf("%d", &num);
  		Chose_print(num);
  		system("cls");
  	}
}

void print()
{
		printf("\n\t\t\t\t==============================================\n");
	printf("\t\t\t\t||               버블 정렬                  ||\n"); 
	printf("\t\t\t\t||                                          ||\n"); 
	printf("\t\t\t\t||   1. 버블정렬   2. 배열 입력   3. 종료   ||\n"); 
	printf("\t\t\t\t||                                          ||\n"); 
	printf("\t\t\t\t||     1. 입력된 배열을 정렬시켜줍니다.     ||\n"); 	
	printf("\t\t\t\t||     2. 배열을 입력하세요.                ||\n"); 
	printf("\t\t\t\t||     3. 프로그램을 종료시킵니다.          ||\n"); 
	printf("\t\t\t\t||     4. 절대 숫자 5개 이상 넣지 마시오.   ||\n"); 
	printf("\t\t\t\t||                                          ||\n\n"); 
	printf("\t\t\t\t\t       *****\r");
	printf("\r \t\t\t\t\t입력 : "); 
}

void Chose_print(int jg)
{
	if(jg == 1)
	{
		Bubble();
		system("cls");
	}
	else if(jg == 2)
	{
		count = 0; 
		_Sort();
	}
	else if(jg/10000 >= 1)
	{
		scr();
	}
}

void Bubble(void)
{
	system("cls");
	int i, j, k;
	char ch;
	int count_c_a = 0, count_t_a = 0; 
	printf("\n\t\t\t\t배열 : [");
	for(k = 0; k < count-1; k++){
		printf("%d ", arr[k]);
	}
		printf("%d", arr[count-1]);
	printf("]\n");
	for(i = 0; i < count; i++)
	{	
		int count_t = 0, count_c = 0;
		for(j = 0; j < count - i; j++)
		{		
			if(arr[j] > arr[j+1]) 
			{
				swap(arr[j], arr[j+1])
				count_t++;
			}
			count_c++;
		}
		printf("\n\n\t\t\t\tPASS : %d", i+1);	
		printf("[");
		for(k = 0; k < count-1; k++)
			printf("%d ", arr[k]);
				printf("%d", arr[count-1]);
		printf("]\n");
		printf("\t\t\t\t비교횟수: %d 교환횟수: %d\n\n", count_c ,count_t);
		count_c_a += count_c;
		count_t_a += count_t;
	}
			printf("\t\t\t\t총 비교횟수: %d 총 교환횟수: %d\n\n", count_c_a ,count_t_a);
	for(i = 0; i <= count*2; i++)
	fflush(stdin);
	ch = getch();
	getche(ch);
}

void _Sort(void)
{
	system("cls");
	int i = 0, j;
	
			
				printf("\n\t\t\t\t\t9999를 입력하면 종료됩니다.\n");
		while(1)
		{	
			if(i == 0)
			{
			
				printf("\n\t\t\t\t\t\t* * * * * * * * * * 9999\r");
				printf("\t\t\t\t예) 배열 입력 : \n\n");
				printf("\t\t\t\t 배열 입력 : ");
			}	
			scanf("%d", &arr[i]);
			if(i > 10)
			{
				for(j = 0; j < count; j++)
				fflush(stdin);
				printf("\n\t\t\t\t\t다시 입력하세요.\n");
				for(j = 0; j < 10; j++)
				arr[j] = 0;
				i = 0; count = 0; continue; 
			} 
			if(arr[i] == 9999){
				arr[i] *= 9999;
				break;
			}
			count++;
			i++;
		}	
		printf("\n\t\t\t\t\t");
		printf("[");
		for(i = 0; i < count-1; i++)
		{
			printf("%d ", arr[i]);
		}
			printf("%d", arr[count-1]);
		printf("]\n \t\t\t\t\t 아무키나 누르시오.");
		getch();
		getche();
		system("cls");
}

void scr(void)
{
	system("cls");
	while(1)
		{ 
			int cu;
			if(cu >= 30)
			{
				printf(" 너무 즐거운 하루 되세요 ^0^ "); 
				if(cu == 100 || cu == 200 || cu == 300 || cu == 400)
				{
					printf("@@@@@@@@@@너어어어어무 좋은 하루!@@@@@@@@@");
				}
				if(cu >= 500)
				{	
					system("cls");
					break;
				}
			}	
			printf("  너무 즐거운 하루 되세요 ^^ \a"); 
			getch();
			cu++; 
			printf("\a");
		}
}
