#include <stdio.h>
#define swap (a, b) {int temp; temp=a; a=b; b=temp;}

void _Sort(void);
void Chose_print(int num);

int main()
{
	int num;
	print();
	scanf("%d", &num);
  	Chose_print(num);
}

void print()
{
		printf("\t\t\t==============================================\n");
	printf("\t\t\t||               버블 정렬                  ||\n"); 
	printf("\t\t\t||                                          ||\n"); 
	printf("\t\t\t||     1. 정렬  2. 랜덤   3. 배열 입력      ||\n"); 
	printf("\t\t\t||                                          ||\n"); 
	printf("\t\t\t||     1. 입력된 배열을 정렬시켜줍니다.     ||\n"); 
	printf("\t\t\t||     2. 배열을 랜덤으로 배치시킵니다.     ||\n");	
	printf("\t\t\t||     3. 배열을 입력하세요.                ||\n"); 
	printf("\t\t\t||                                          ||\n\n"); 
	printf("\t\t\t\t       *****\r");
	printf("\r \t\t\t\t입력 : "); 
}

void _Sort(void)
{
	int arr[10];
	int i = 0, j, count = 0;
		
		while(1)
		{	
			scanf("%d", &arr[i]);
			if(arr[i] == 9999){
				i--; break;
			} 
			count++;
			i++;
		}	
		arr[i] == arr[--i];
		for(i = 0; i < count; i++)
		{
			printf("%d ", arr[i]);
		}
}

void Chose_print(int jg)
{
	if(jg == 1)
	{
		Bubble();
	}
	else if(jg == 2)
	{
		
	}
	else if(jg == 3)
	{
		_Sort();
	}
}
