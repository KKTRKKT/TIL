#include <stdio.h>
#include <windows.h>
#define swap(a, b) {int temp; temp=a; a=b; b=temp;}

int arr[10], count = 0; // count : �迭�� �Է��� ������ ������Ŵ 
void Chose_print(int num); //��ȣ�� �Է¹޾� ��ȣ�� �´� �Լ��� ȣ���� 
void _Sort(void); // �迭 �Է¹޴� �Լ� 
void Bubble(void); // ���� ���� 
void print(void); //���� �κ�
void scr(void);  // �̽��� ���� 

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
	printf("\t\t\t\t||               ���� ����                  ||\n"); 
	printf("\t\t\t\t||                                          ||\n"); 
	printf("\t\t\t\t||   1. ��������   2. �迭 �Է�   3. ����   ||\n"); 
	printf("\t\t\t\t||                                          ||\n"); 
	printf("\t\t\t\t||     1. �Էµ� �迭�� ���Ľ����ݴϴ�.     ||\n"); 	
	printf("\t\t\t\t||     2. �迭�� �Է��ϼ���.                ||\n"); 
	printf("\t\t\t\t||     3. ���α׷��� �����ŵ�ϴ�.          ||\n"); 
	printf("\t\t\t\t||     4. ���� ���� 5�� �̻� ���� ���ÿ�.   ||\n"); 
	printf("\t\t\t\t||                                          ||\n\n"); 
	printf("\t\t\t\t\t       *****\r");
	printf("\r \t\t\t\t\t�Է� : "); 
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
	printf("\n\t\t\t\t�迭 : [");
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
		printf("\t\t\t\t��Ƚ��: %d ��ȯȽ��: %d\n\n", count_c ,count_t);
		count_c_a += count_c;
		count_t_a += count_t;
	}
			printf("\t\t\t\t�� ��Ƚ��: %d �� ��ȯȽ��: %d\n\n", count_c_a ,count_t_a);
	for(i = 0; i <= count*2; i++)
	fflush(stdin);
	ch = getch();
	getche(ch);
}

void _Sort(void)
{
	system("cls");
	int i = 0, j;
	
			
				printf("\n\t\t\t\t\t9999�� �Է��ϸ� ����˴ϴ�.\n");
		while(1)
		{	
			if(i == 0)
			{
			
				printf("\n\t\t\t\t\t\t* * * * * * * * * * 9999\r");
				printf("\t\t\t\t��) �迭 �Է� : \n\n");
				printf("\t\t\t\t �迭 �Է� : ");
			}	
			scanf("%d", &arr[i]);
			if(i > 10)
			{
				for(j = 0; j < count; j++)
				fflush(stdin);
				printf("\n\t\t\t\t\t�ٽ� �Է��ϼ���.\n");
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
		printf("]\n \t\t\t\t\t �ƹ�Ű�� �����ÿ�.");
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
				printf(" �ʹ� ��ſ� �Ϸ� �Ǽ��� ^0^ "); 
				if(cu == 100 || cu == 200 || cu == 300 || cu == 400)
				{
					printf("@@@@@@@@@@�ʾ��� ���� �Ϸ�!@@@@@@@@@");
				}
				if(cu >= 500)
				{	
					system("cls");
					break;
				}
			}	
			printf("  �ʹ� ��ſ� �Ϸ� �Ǽ��� ^^ \a"); 
			getch();
			cu++; 
			printf("\a");
		}
}
