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
	printf("\t\t\t||               ���� ����                  ||\n"); 
	printf("\t\t\t||                                          ||\n"); 
	printf("\t\t\t||     1. ����  2. ����   3. �迭 �Է�      ||\n"); 
	printf("\t\t\t||                                          ||\n"); 
	printf("\t\t\t||     1. �Էµ� �迭�� ���Ľ����ݴϴ�.     ||\n"); 
	printf("\t\t\t||     2. �迭�� �������� ��ġ��ŵ�ϴ�.     ||\n");	
	printf("\t\t\t||     3. �迭�� �Է��ϼ���.                ||\n"); 
	printf("\t\t\t||                                          ||\n\n"); 
	printf("\t\t\t\t       *****\r");
	printf("\r \t\t\t\t�Է� : "); 
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
