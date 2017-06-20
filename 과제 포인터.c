#include <Stdio.h>

int main()
{
	int a[10];
	int *p = a;
	int i;
	
	for(i=0; i < 10; i++)
	{
		a[i] = i+1;
	}
	for(i=0; i < 10; i++)
	{
		printf("%d ", *(p+i)+2);
	}
}
